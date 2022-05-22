import React from 'react';
import foto from '../assets/images/mesaPavo.jpg';
import image from '../assets/images/TodoMueble.png';

function TopBar(){



    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/} 
			<div style= {{background: "black"}}>
				<nav className="navbar navbar-expand navbar-light bg-black topbar  static-top shadow">
				<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon" >
                        <img className="w-50" src={image} alt="Todo Muebles" />
                    </div>
                </a>
				
				<div className="d-sm-flex aligns-items-center justify-content-center mb-1" >
						<h1 className="h3 mb-1 text-gray-200 " > App Dashboard</h1>
					</div>


					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/*<!-- Topbar Navbar -->*/}
					
					<ul className="navbar-nav ml-auto">

						{/*<!-- Nav Item - Alerts -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>
								{/*<!-- Counter - Alerts -->*/}
								<span className="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

						{/*<!-- Nav Item - Messages -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								{/*<!-- Counter - Messages -->*/}
								<span className="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-100 small">Cosme Fulanito</span>
								<img className="img-profile rounded-circle" src={foto} alt="Cosme Fulanito" width="200"/>
							</a>
						</li>

					</ul>
			
				</nav>
			</div>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;