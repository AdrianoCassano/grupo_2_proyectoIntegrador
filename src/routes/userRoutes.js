const express = require ("express");
const router = express.Router();
const userController = require("../controllers/userController");

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
router.post("/register", upload.single('userAvatar'), (req, res) => {
    console.log(req.file) 
    res.send("Archivo subido correctamente")
  })

router.get("/register", upload.single(""), userController.register);
router.get("/login", userController.login);

module.exports = router