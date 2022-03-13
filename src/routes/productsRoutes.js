const express = require ("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController");

const multer = require ("multer");
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "public/images/products");
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
router.get("/:id", productsController.detalle);


router.get("/:id/edicion", productsController.edicion);
router.put("/:id/actualizado",upload.single("productImg"), productsController.editado);

router.delete("/:id/delete", productsController.delete);


module.exports = router