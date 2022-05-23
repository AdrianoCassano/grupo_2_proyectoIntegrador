import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import TablaProductosRow from './TablaProductosRow'

function TablaProductos() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()

    useEffect( () => {
        fetch(`/admin/productos?page=${page}`)
            .then(response => {
                return response.json()
            })
            .then(products => {
                setProducts(products.response.products)
                setTotalPages(products.response.totalPages)
            })
            .catch(error => console.error(error))
    }, [page])

    const nextPage = () =>{
        if(page<totalPages){
            setPage (page + 1)
        }
    }
    const previousPage = () =>{
        if(page>1){
            setPage (page - 1)
        }
    }
   
    const paginate = (pageNum) => setPage(pageNum)
    
    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered border-primary" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Categoria</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Categoria</th>
                                    <th>Editar</th>
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
                            <Pagination page={page} paginate={paginate} nextPage={nextPage} previousPage={previousPage} totalPages={totalPages}/> 
                    </div>
                </div>
            </div>
        </>
    )
} 


export default TablaProductos