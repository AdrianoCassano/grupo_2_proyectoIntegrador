import React from "react";
import SmallCard from "./SmallCard";
import { useState, useEffect } from "react";

function ContentRowProducts() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch("admin/productos")
            .then(respuesta => respuesta.json())
            .then(products => {
                setProducts(products.response);
            });
    }, []);

    useEffect(() => {
        fetch("admin/productos")
            .then(respuesta => respuesta.json())
            .then(categories => {
                setCategories(categories.response.countByCategory);
            });
    }, []);

    useEffect(() => {
        fetch("admin/usuarios")
            .then(respuesta => respuesta.json())
            .then(users => {
                setUsers(users.response);
            });
    }, []);

    let totalProducts={
        title: " Productos en la base de datos ",
        color: "primary",
        quantity: products.count,
        icon: "fa-solid fa-couch",
        }
    let totalUsers ={
        title: "Usuarios registrados",
        color: "info",
        quantity: users.count,
        icon: "fa-solid fa-users",
        }
    let categoryQuantity = categories.length
    let totalCategories ={
        title: "Categorias",
        color: "success",
        quantity: categoryQuantity,
        icon: "fa-solid fa-clipboard-list",
    }
   
    let smallCardData =[totalProducts,totalCategories,totalUsers]
   
    return (
        <div className="row ">
        
        {smallCardData.map((cardData, i) => {
            return <SmallCard {...cardData} key={i} />;
            })}
        </div>
  );
}

export default ContentRowProducts;