// import React, { useEffect, useState} from "react";
// import LastProductInDbPic from "./LastProductInDbPic";

// const LastProductInDbInfo = ({lastPage}) => {
//     const [lastProductInfo, setLastProductInfo] = useState([]);

//     useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch(`admin/productos?page=${lastPage}`)
//             console.log(response)
//             const json = await response.json()
//             setLastProductInfo(json.response.products.pop());               
//         } catch (error) {
//             console.log(error)
//         }
//     };
//     fetchData()
//     }, [])

//   return (
//     <>
//         <div className="card-body">
//             <div className="text-center">
//                 <h3 className="Mueble">{lastProductInfo.nombre}</h3>
//                 {lastProductInfo &&
//                 <LastProductInDbPic lastProductUrl={lastProductInfo.id}/>
//                 }
//             </div>
//             <p>{lastProductInfo.descripcion}</p>
//             <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3030/products/${lastProductInfo.id}`}>Ver detalle del mueble</a>
//         </div>
//     </>
//   )
// }

// export default LastProductInDbInfo