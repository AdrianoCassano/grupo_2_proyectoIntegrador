const express = require ("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController");
const productValidation = require("../middlewares/productValidation");
const productsValidation = require("../middlewares/productsValidation");


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
// router.post('/products', upload.single('productImg'), (req, res) => {
//     console.log(req.file) 
//     res.send('Archivo subido correctamente')
//   })

router.get("/", productsController.products);
router.get("/buscar", productsController.search);
router.get("/creacion", productsValidation, productsController.create);
router.post("/creacion", upload.single("productImg"), productValidation, productsController.created);
router.get("/:id", productsController.detalle);


router.get("/edicion/:id", productsValidation, productsController.edit);
router.put("/edicion/:id",upload.single("productImg"), productValidation, productsController.update);

router.delete("/:id/delete", productsController.delete);


module.exports = router