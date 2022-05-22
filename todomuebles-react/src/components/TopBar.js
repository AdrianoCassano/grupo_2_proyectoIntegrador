import React from 'react';
import "../assets/css/NavBar.css" 


function TopBar(){

    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/} 
			<div style= {{background: "black"}}>
			<nav class ="navigation">
                    <input type="checkbox" id="check"/>
                        <label for="check">
                            <i class="fas fa-bars" id="btn"></i>
                            <i class="fas fa-times" id="cancel"></i>
                        </label>
                    <ul>
                        <li><a href="http://localhost:3030/products">Productos</a></li>
                        <li><a href="http://localhost:3030/aboutus">Nosotros</a></li>
                        {/* <li><a href="#footer">Contacto</a></li> */}
                        {/* <li id="mi-carrito"><a href="/carrito">Mi Carrito <i class="fas fa-shopping-cart"></i></a></li> */}
                                  
                        <li id="acesso-login"><a href="/perfil">Mi Cuenta <i class="fas fa-user-circle"></i></a></li>
                        {/* <li id="acesso-login"><a href="/logout">Salir <i class="fas fa-sign-out-alt"></i></a></li>
                        
                        <li><a href="/register">Registrarse</a></li>
                        <li id="acesso-login"><a href="/login">Ingresar <i class="fas fa-user-circle"></i></a></li> */}
                    </ul>
                </nav>
			</div>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;