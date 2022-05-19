const db = require ("../database/models")
const { Sequelize } = require('sequelize');

const adminApiController ={

    panel: (req,res) => {
        try {
            
        } catch (error) {
            console.log(error)
            res.status(500).json({msg:"error"})
        }
        res.json("panel")
    },
    users: async (req,res) => {
        try {
            const limit = 10
            const page = parseInt(req.query.page)
            const offset = page ? (page-1)* limit : 0
            let usersList = await db.User.findAndCountAll({
                attributes: ["id", "firstName", "lastName", "email"],
                include: {association:"usercategory"},
                offset: offset,
                limit: limit,
            })

            const rows = usersList.rows.map(user => {
                const { dataValues } = user;
                const url = `${req.protocol}://${req.get('host')}${req.baseUrl}${req.path}${user.id}`;
                return {
                    ...dataValues,
                    url
                }
            })
            const totalPages = Math.ceil(usersList.count / limit)

            let response = {
                totalPages: totalPages,
                currentPageNumber: page,
                count: usersList.count,
                users: rows,
            }
            res.status(200).json({response})     
        } catch (error) {
            console.log(error)
            res.status(500).json({msg:"error"})
        }
    },
    userDetail: async (req,res) => {
        try {
            let userDetail = await db.User.findByPk(req.params.id, {attributes: {exclude:["password", "categoryId"]}})
            let userAvatarUrl = userDetail.userAvatar
            
            let response = {
                user: userDetail,
                userAvatarUrl: `${req.protocol}://${req.get('host')}/images/users/${userAvatarUrl}`
            }
            res.status(200).json({response})     
        } catch (error) {
            console.log(error)
            res.status(500).json({msg:"error"})
        }
    },
    products: async (req,res) => {
        try {
            const limit = 10
            const page = req.query.page
            const offset = page ? (page-1)* limit : 0
            let products = await db.Product.findAndCountAll({
                attributes: ["id", "nombre", "descripcion"],
                include: [{association:"categorias"},{association:"users"}],
                offset: offset,
                limit: limit,
            })

            
            const rows = products.rows.map(product => {
                const { dataValues } = product;
                const url = `${req.protocol}://${req.get('host')}${req.baseUrl}${req.path}/${product.id}`;
                return {
                    ...dataValues,
                    url
                }
            })
            
            let countByCategory = await db.Product.findAll({
                attributes: [
                    "categorias.id","categorias.name",
                    [db.Sequelize.fn("COUNT", db.Sequelize.col("categorias.id")), "count"],
                ],
                include: [{association:"categorias"}],
                group: ['categorias.id']
            })
            // countByCategory.forEach(cat => {                
            //     const {dataValues} = cat;
            //     //console.log("cat", cat);
            //     console.log("dataValues", dataValues);
            // })
            console.log(rows)
            const totalPages = Math.ceil(products.count / limit)
            let response = {
                totalPages: totalPages,
                currentPageNumber: page,
                count: products.count,
                countByCategory,
                products: rows
            }
                res.status(200).json({response})            
        } catch (error) {
            console.log(error)
            res.status(500).json({msg:"error"})
        }
    },
    productDetail: async (req,res) => {
        try {
            let productDetail = await db.Product.findByPk(req.params.id,{
                attributes: ["id","nombre","descripcion","materiales","cantidad","precio","dimensiones","peso","categoriaId","productImg"],
                include: [{association:"categorias"},{association:"users"}]
            })
            
            let productImgUrl = productDetail.productImg

            let response = {
                product: productDetail,
                productImgUrl: `${req.protocol}://${req.get('host')}/images/products/${productImgUrl}`
            }
            res.status(200).json({response})
        } catch (error) {
            console.log(error)
            res.status(500).json({msg:"error"})
        }
    }
}
module.exports = adminApiController;