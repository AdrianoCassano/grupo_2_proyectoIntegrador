import React, { useState, useEffect } from "react";
import TablaProductosRow from './TablaProductosRow'

function TablaProductos() {
    const [productos, setProductos] = useState([])
    const [pagina,setPagina] = useState(1)

    useEffect( () => {
        fetch("/admin/productos")
            .then(respuesta => {
                return respuesta.json()
            })
            .then(productos => {
                setProductos(productos.response.products)
            })
    }, [])

    const cargarMas = async() =>{
        await setPagina (pagina + 1)
    }
    
    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Categoria</th>
                                    <th>Acceder</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Categoria</th>
                                    <th>Acceder</th>
                                </tr>
                            </tfoot>
                            <tbody>                                    
                                {
                                    productos.map((producto,index)=>{
                                        
                                        return <TablaProductosRow {...producto} key={index} />
                                        })
                                } 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
} 


export default TablaProductos