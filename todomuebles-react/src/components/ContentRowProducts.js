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
        color: "success",
        quantity: products.count,
        icon: "fa-list",
        }
    let totalUsers ={
        title: "Usuarios registrados",
        color: "primary",
        quantity: users.count,
        icon: "fa-user-check",
        }
    let categoryQuantity = categories.length
    let totalCategories ={
        title: "Categorias",
        color: "info",
        quantity: categoryQuantity,
        icon: 'fa-award',
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