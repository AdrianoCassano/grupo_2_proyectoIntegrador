import React from 'react';
import imagenFondo from '../assets/images/mesaPavo.jpg';

function LastProductInDb(){


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto agregado a nuestra lista</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={imagenFondo} alt=" Mesa Pavo "/>
                    </div>
                    <p>Majestuosa ave dandole soporte a tus comidas, creada en marmol y pintada a mano, producto exclusivo traido desde Paris</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del mueble</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
