import React from "react";

function Pagination({page, paginate, previousPage, nextPage, totalPages}) {
        let pageNumbers = []
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return (
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={() => previousPage()}>Previous</a>
                    </li>
                        {pageNumbers.map(num => {
                        if(page == num){
                            return (
                            <li className="page-item active" key={num}>
                                <a onClick={() => paginate(num)} href="#" className="page-link">{num}</a>
                            </li>               
                            )
                        } else{
                            return(
                            <li className="page-item" key={num}>
                                <a onClick={() => paginate(num)} href="#" className="page-link">{num}</a>
                            </li>
                            )
                        }
                        })}
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={() => nextPage()}>Next</a>
                    </li>
                </ul>
            </nav>
        )
    }


export default Pagination