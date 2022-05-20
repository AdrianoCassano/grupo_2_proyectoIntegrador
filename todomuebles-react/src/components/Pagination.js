import React from "react";


function Pagination({pageNumber, currentPageNumber,nextPage,previousPage, totalPages}) {


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
                        <li className="page-item" key={pageNumber}>
                            <a onClick={() => (pageNumber)} href="#" className="page-link">{pageNumber}</a>
                        </li>                  
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={() => nextPage()}>Next</a>
                    </li>
                </ul>
            </nav>
        )
    }


export default Pagination