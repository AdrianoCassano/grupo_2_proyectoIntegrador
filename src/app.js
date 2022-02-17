const express = require ("express")
const app = express()
const path = require("path");
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const userRoutes = require("./routes/userRoutes");
const methodOverride = require("method-override");

app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/carrito", checkoutRoutes);
app.use("/", userRoutes);
app.use("/", userRoutes);


app.listen (3030, () =>{console.log("server up")});
