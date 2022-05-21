import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import TablaUsuariosRow from './TablaUsuariosRow'

function TablaUsuarios() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()

    useEffect( () => {
        fetch(`/admin/usuarios?page=${page}`)
            .then(response => {
                return response.json()
            })
            .then(users => {
                setUsers(users.response.users)
                setTotalPages(users.response.totalPages)
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
                                    users.map((user,index)=>{
                                        return <TablaUsuariosRow {...user} key={index} />
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


export default TablaUsuarios