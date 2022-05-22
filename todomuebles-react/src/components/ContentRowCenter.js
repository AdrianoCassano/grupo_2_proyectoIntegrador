import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';


function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Ultimpo producto en la DB -->*/}
            <LastProductInDb />
            
            {/*<!-- Categorias en la DB -->*/}
            <CategoriesInDb />

        
        </div>
    )
}

export default ContentRowCenter;