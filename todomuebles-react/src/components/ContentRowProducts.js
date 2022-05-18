import React from 'react';
import SmallCard from './SmallCard';
import TotalProductsInDb from './TotalProductsInDb'
import TotalCategoriesInDb from './TotalCategoriesInDb'
import TotalUsersInDb from './TotalUsersInDb'

/*  Cada set de datos es un objeto literal */

/* <!-- Productos en la DataBase --> */

// let productsInDB = {
//     title: 'Total de Productos en la DataBase',
//     color: 'danger', 
//     cuantity: 33,
//     icon: 'fa-clipboard-list'
// }

/* <!--Total de Categorias --> */

// let totalCategories = {
//     title:' Total de Categorias', 
//     color:'danger', 
//     cuantity: 9,
//     icon:'fa-award'
// }

/* <!--Cantidad de Usuarios --> */

// let UsersQuantity = {
//     title:'Cantidad de Usuarios' ,
//     color:'danger',
//     cuantity:49,
//     icon:'fa-user-check'
// }

let cartProps = [{TotalProductsInDb,TotalCategoriesInDb,TotalUsersInDb}];

function ContentRowProducts(){
    return (
    
        <div className="row">
            
            // {cartProps.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
            
            })}
            
        </div>
    )
}

export default ContentRowProducts;