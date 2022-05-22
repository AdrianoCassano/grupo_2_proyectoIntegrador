import React from 'react'

const TablaProductosRow = (props) => {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.firstName} {props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.usercategory.name}</td>
                <td><a href={`${props.url}`}>Link</a></td>
                <td><button onClick={() => props.deleteUser(props.id)} >Eliminar</button></td>
            </tr>
        </>
    )
}

export default TablaProductosRow