const express = require ("express");
const router = express.Router();
const path = require("path");
const userController = require("../controllers/userController");
const guestValidation = require("../middlewares/guestValidation");
const authValidation = require("../middlewares/authValidation");
const registerValidation = require("../middlewares/registerValidation")
const editValidation = require("../middlewares/editValidation")



const multer = require ("multer");
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./public/images/users")
    },
    filename: function (req,file,cb){
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }

})

const upload = multer({ storage: storage });
// router.post("/register", upload.single('userAvatar'), (req, res) => {
//     console.log(req.file) 
//     res.send("Archivo subido correctamente")
//   })

router.get("/registrarse", guestValidation, userController.register);
router.post("/registrarse", upload.single("userAvatar"), registerValidation, userController.registered);
router.get("/ingresar", guestValidation, userController.login);
router.post("/ingresar", userController.authenticate);

router.get("/edicion/:id", editValidation, userController.edit);
router.put("/edicion/:id", upload.single("userAvatar"), registerValidation, userController.updated);

router.delete("/:id/delete", userController.delete);

router.get("/perfil", authValidation, userController.profile);

router.get("/salir", userController.logout);

module.exports = router