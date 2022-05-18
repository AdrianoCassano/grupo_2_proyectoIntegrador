import React, { useState, useEffect } from "react";



function TotalUsersInDb () {

    const [totalUsers, setTotalUsers] = useState([])

    useEffect( () => {
        fetch("/admin/usuarios")
            .then(respuesta => {
                return respuesta.json()
            })
            .then(totalUsers => {
                setTotalUsers(totalUsers.response.count)
            })
    }, [])

    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                   Total de Categorias en la Base de Datos
                </h5>
                </div>
                <div className="card-body">
                <div className="row">
                
                         {/* totalProducts.map((product,index)=>{
                             return <Product {...product} key={index} />
                            }) */}
                            
                            title: 'Total de Usuarios en la DataBase',
                            color: 'danger', 
                            cuantity: {totalUsers},
                            icon: 'fa-clipboard-list'
                        
                    
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}



    export default TotalUsersInDb