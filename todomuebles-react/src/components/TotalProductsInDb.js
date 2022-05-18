import React, { useState, useEffect } from "react";



function TotalProductsInDb () {

    const [totalProducts, setTotalProducts] = useState([])

    useEffect( () => {
        fetch("/admin/productos")
            .then(respuesta => {
                return respuesta.json()
            })
            .then(totalProducts => {
                setTotalProducts(totalProducts.response.count)
            })
    }, [])

    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                   Total de Productos en la Base de Datos renzo
                </h5>
                </div>
                <div className="card-body">
                <div className="row">
                
                         {/* totalProducts.map((product,index)=>{
                             return <Product {...product} key={index} />
                            }) */}
                            
                            title: 'Total de Productos en la DataBase',
                            color: 'danger', 
                            cuantity: {totalProducts},
                            icon: 'fa-clipboard-list'
                        
                    
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}



    export default TotalProductsInDb