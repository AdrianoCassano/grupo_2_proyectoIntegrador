const path = require ("path")
const {body} = require("express-validator")

module.exports = [
    body("nombre").notEmpty().withMessage("El nombre del producto es obligatorio").bail()
    .isLength({min:5}).withMessage("Mínimo 5 caracteres"),
    body("descripcion").notEmpty().withMessage("La descripción del producto es obligatoria").bail()
    .isLength({min:20}).withMessage("Mínimo 20 caracteres"),
    body("materiales").notEmpty().withMessage("Los materiales son obligatorios"),
    body("cantidad").notEmpty().withMessage("La cantidad es obligatoria"),
    body("precio").notEmpty().withMessage("El precio es obligatorio").bail()
    .isInt({min:1}).withMessage("El precio  no puede ser 0"),
    body("dimensiones").notEmpty().withMessage("Las dimensiones son obligatorias").bail(),
    body("peso").notEmpty().withMessage("El peso es obligatorio").bail()
    .isInt({min:1}).withMessage("El peso no puede ser 0"),
    body("categoriaId").notEmpty().withMessage("La categoría es obligatoria"),
    // body("productImg").custom((value, {req}) => {
    //     let file = req.file
    //     if (file){
    //         let extensions = [".jpg", ".jpeg", ".png", ".gif"]
    //         let fileExtensions = path.extname(file.originalname)
    //         if (!extensions.includes(fileExtensions)) throw new Error(`La imagen debe tener uno de los siguientes formatos: ${extensions.join(", ")}`)    
    //     }
    //     return true}
    // )
]