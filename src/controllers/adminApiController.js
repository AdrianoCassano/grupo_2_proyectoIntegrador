const db = require ("../database/models")

const adminApiController ={

    panel: (req,res) => {
        try {
            
        } catch (error) {
            res.status(500).json({msg:"error"})
        }
        res.json("panel")
    },
    users: async (req,res) => {
        try {
            let usersList = await db.User.findAndCountAll({
                attributes: ["id", "firstName", "lastName", "email"],
                include: {association:"usercategory"},
                offset: 10,
                limit: 10,
            })

            let response = {
                status: 200,
                count: usersList.count,
                users: usersList.rows,
            }
            res.status(200).json({response})     
        } catch (error) {
            res.status(500).json({msg:"error"})
        }
    },
    userDetail: async (req,res) => {
        try {
            let userDetail = await db.User.findByPk(req.params.id,{attributes: {exclude:["password", "categoryId"]}})

            let response = {
                status: 200,
                user: userDetail
            }
            res.status(200).json({response})     
        } catch (error) {
            res.status(500).json({msg:"error"})
        }
    },
    products: async (req,res) => {
        try {
            let  products = await db.Product.findAndCountAll({
                include: [{association:"categorias"},{association:"users"}]
            })

            let response = {
                status: 200,
                count: products.lenght,
                countByCategory:{},
                products: products.rows
                // products → array con la colección de productos, cada uno con:
                // id
                // name
                // description
                // un array con principal relación de uno a muchos (ej:categories).
                // detail → URL para obtener el detalle.
            }
                res.status(200).json({response})            
        } catch (error) {
            res.status(500).json({msg:"error"})
        }
    },
    productDetail: async (req,res) => {
        try {
            let productDetail = await db.Product.findByPk(req.params.id)
            
            let response = {
                status: 200,
                product: {
                    id: productDetail.id,
                    nombre: productDetail.nombre,
                    descripcion: productDetail.descripcion,
                    materiales: productDetail.materiales,
                    cantidad: productDetail.cantidad,
                    precio: productDetail.precio,
                    dimensiones: productDetail.dimensiones,
                    peso: productDetail.peso,
                    categoriaId: productDetail.categoriaId,
                    productImg: productDetail.productImg,
                    // una propiedad por cada campo en base.
                    // un array por cada relación de uno a muchos (categories, colors, sizes, etc).
                    // Una URL para la imagen del producto (para mostrar la imagen).
                }
            }
            res.status(200).json({response})
        } catch (error) {
            res.status(500).json({msg:"error"})
        }
    }
}
module.exports = adminApiController;