import React, { Component } from 'react'

function Pagination({totalPages,currentPageNumber}) {
    const nextPage = async() =>{
        await setPagina (pagina + 1)
    }
    const previousPage = async() =>{
        await setPagina (pagina - 1)
    }

        // const { postsPerPage, totalPosts, paginate, nextPage, prevPage } = this.props;

        // const pageNumbers = [];

        // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        //     pageNumbers.push(i);
        // }

        return (
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={() => previousPage()}>Previous</a>
                    </li>                    
                        <li className="page-item" key={currentPageNumber}>
                            <a onClick={() => paginate(currentPageNumber)} href="#" className="page-link">{currentPageNumber}</a>
                        </li>                  
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={() => nextPage()}>Next</a>
                    </li>
                </ul>
            </nav>
        )
    }


export default Pagination