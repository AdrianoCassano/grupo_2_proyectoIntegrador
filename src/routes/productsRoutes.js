const express = require ("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController");

const multer = require ("multer");
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./public/images/products");
    },
    filename: function (req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage});
router.post('/products', upload.single('productImg'), (req, res) => {
    console.log(req.file) 
    res.send('Archivo subido correctamente')
  })

router.get("/", productsController.products);
router.get("/creacion", productsController.creacion);
router.post("/",upload.single("productImg"), productsController.creado);
<<<<<<< HEAD

=======
>>>>>>> 6c2c08f36618eac45143ce59c9a533437ad83695
router.get("/:id", productsController.detalle);


router.get("/:id/edicion", productsController.edicion);
router.put("/:id",upload.single("productImg"), productsController.editado);

router.delete("/:id", productsController.destroy);

module.exports = router