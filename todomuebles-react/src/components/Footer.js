import React from 'react';
import image from '../assets/images/TodoMueble.png';

function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
				<div style= {{background: "white", color: "#5f5f5f",fontSize:"14px", padding: "60px 0 20px", textAlign:"center"}}  className="container my-auto">
					
				<div className="footer-brand-icon mb-4">
                        <img className="w-30"  src={image} alt="Todo Muebles"  />
                    </div>
					<div className="copyright text-center my-auto ">
						<span>Copyright &copy; Dashboard 2022</span>
					
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;