import React from 'react';
import image from '../assets/images/TodoMueble.png';
import { Link, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import ContentRowProducts from './ContentRowProducts';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <div style= {{background: "black"}}>
            <ul className="navbar-nav  -secondary sidebar sidebar-dark accordion" id="accordionSidebar" >

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon" >
                        <img className="w-100" src={image} alt="Todo Muebles" />
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active" >
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span >Dashboard - Todo Muebles</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>

                {/*<!-- Nav Item - Tabla -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla</span></Link>
                </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            </div>
            {/*<!-- End of Sidebar -->*/}

            <Routes>
                 <Route  path="/" element={ <ContentWrapper />}>
                 </Route>

                 <Route  path="/CategoriesInDb" element={ <CategoriesInDb />}>
                 </Route>

                 <Route  path="/LastProductInDb" element={ <LastProductInDb />}>
                 </Route>    

               
                 <Route path="/ContentRowProducts" element={<ContentRowProducts />}>
                 </Route>

                 <Route element={NotFound} ></Route>
            </Routes>
       
    
                    
                
                
         
        </React.Fragment>
    )
}
export default SideBar;