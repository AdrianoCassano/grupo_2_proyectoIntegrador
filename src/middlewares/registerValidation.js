const path = require ("path")
const {body} = require("express-validator")

module.exports = [
    body("firstName").notEmpty().withMessage("Por favor escriba su nombre").bail()
    .isLength({min:2}),
    body("lastName").notEmpty().withMessage("Por favor escriba su apellido").bail()
    .isLength({min:2}),
    body("email").notEmpty().withMessage("Por favor escriba su correo electrónico").bail()
        .isEmail().withMessage("Por favor escriba un formato válido de correo electrónico").bail(),
    body("password").notEmpty().withMessage("Por favor escriba su contraseña").bail()
    .isLength({min:8}).withMessage("La contraseña debe tener un mínimo de 8 caracteres"),
        body("passwordconf").custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("La confiramción de la Contraseña no coincide con la Contraseña ingresada");
        }
        return true
    }),
    body("country").notEmpty().withMessage("Por favor seleccione su país de residencia"),
    body("idType").notEmpty().withMessage("Por favor seleccione un tipo de documento"),
    body("idDoc").notEmpty().withMessage("Por favor indique su número de documento"),
    body("gender").notEmpty().withMessage("Por favor seleccione una opción"),
    body("date").notEmpty().withMessage("Por favor indique su fecha de nacimiento"),
    body("phoneNumber").notEmpty().withMessage("Por favor indique su numero de contacto"),
    // body("file").custom((value, {req}) => {
    //     let file = req.file
    //     if (file){
    //         let extensions = [".jpg", ".jpeg", ".png", ".gif"]
    //         let fileExtensions = path.extname(file.originalname)
    //         if (!extensions.includes(fileExtensions)) throw new Error(`La imagen debe tener uno de los siguientes formatos: ${extensions.join(", ")}`)    
    //     }
    // return true}
    // ),
    body("terms").notEmpty().withMessage("Para registrarse debe confirmar que ha leido y acepta los terminos y condiciones"),
]