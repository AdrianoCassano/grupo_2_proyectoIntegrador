import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import TablaProductosRow from './TablaProductosRow'

function TablaProductos() {
    const [products, setProducts] = useState([])
    const [page,setPage] = useState(1)

    useEffect( () => {
        fetch(`/admin/productos?pagina=${page}`)
            .then(response => {
                return response.json()
            })
            .then(products => {
                setProducts(products.response.products)
            })
            .catch(error => console.error(error))
    }, [])

    const pageNumber = page
    const currentPageNumber = products.currentPageNumber
    const totalPages = products.totalPages
    const nextPage = async() =>{
        await setPage (page + 1)
    }
    const previousPage = async() =>{
        await setPage (page - 1)
    }

    // const paginate = (currentPageNumber) => setCurrentPage{currentPageNumber}


    
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
                                    products.map((product,index)=>{
                                        
                                        return <TablaProductosRow {...product} key={index} />
                                        })
                                } 
                            </tbody>
                        </table>
                        <Pagination {...pageNumber}{...currentPageNumber} {...nextPage} {...previousPage} {...totalPages}/> 
                    </div>
                </div>
            </div>
        </>
    )
} 


export default TablaProductos