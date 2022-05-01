const express = require ("express");
const router = express.Router();
const path = require("path");
const userController = require("../controllers/userController");
const guestValidation = require("../middlewares/guestValidation");
const authValidation = require("../middlewares/authValidation");
const registerValidation = require("../middlewares/registerValidation")


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

router.get("/register", guestValidation, userController.register);
router.post("/register", upload.single("userAvatar"),  userController.registered);
router.get("/login", guestValidation, userController.login);
router.post("/login", userController.authenticate);

router.get("/edicion/:id", userController.edit);
router.put("/edicion/:id",upload.single("userAvatar"), userController.updated);

router.delete("/:id/delete", userController.delete);

router.get("/perfil", authValidation, userController.profile);

router.get("/logout", userController.logout);

module.exports = router