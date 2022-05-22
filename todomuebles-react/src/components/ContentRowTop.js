import React from 'react';
import ContentRowProducts from './ContentRowProducts';
import ContentRowCenter from './ContentRowCenter';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid" style={{textAlign:"center"}}>
					<div className="d-sm-flex aligns-items-center justify-content-center mb-4">
						{/* <h1 className="h3 mb-0 text-gray-800 ">TODO MUEBLES App Dashboard</h1> */}
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowProducts />
					<ContentRowCenter />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;