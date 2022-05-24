import React from 'react'



const TablaProductosRow = (props) => {
    
    
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.firstName} {props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.usercategory.name}</td>
                <td><a href={`${props.edit}`}>Link</a></td>
                <td><button type="button" onClick={() => props.deleteUser(props.id)} className="btn btn-primary" data-bs-toggle="modalEliminar" data-bs-target={`#id${props.id}`} >Eliminar</button></td>
            </tr>

        </>
    )
}

export default TablaProductosRow