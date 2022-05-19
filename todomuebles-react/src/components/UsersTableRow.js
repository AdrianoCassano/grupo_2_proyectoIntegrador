import React from 'react'

const TablaProductosRow = (props) => {
    
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.nombre}</td>
                <td>{props.descripcion}</td>
                <td>{props.categorias.name}</td>
                <td><a href={`${props.url}`}>Link</a></td>
            </tr>

        </>
    )
}

export default TablaProductosRow