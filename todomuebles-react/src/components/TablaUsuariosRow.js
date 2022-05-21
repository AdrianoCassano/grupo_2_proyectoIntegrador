import React from 'react'

const TablaProductosRow = (props) => {
    
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.firstName} {props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.usercategory}</td>
                <td><a href={`${props.url}`}>Link</a></td>
            </tr>

        </>
    )
}

export default TablaProductosRow