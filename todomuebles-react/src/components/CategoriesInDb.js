import React, { useState, useEffect } from "react";
import Categoria from "./Categoria";

function CategoriesInDb () {

    const [categorias, setCategorias] = useState([])

    useEffect( () => {
        fetch("/admin/productos")
            .then(respuesta => {
                return respuesta.json()
            })
            .then(categorias => {
              setCategorias(categorias.response.countByCategory)
            })
    }, [])



        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Categoria de Muebles en la Base de Datos
                    </h5>
                    </div>
                    <div className="card-body">
                    <div className="row">
                        {
                            categorias.map((categoria,index)=>{
                              return <Categoria {...categoria} key={index} />
                            })
                        }
                    </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
}

export default CategoriesInDb