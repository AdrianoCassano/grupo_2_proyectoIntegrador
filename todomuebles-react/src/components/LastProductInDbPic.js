// import React, { useEffect, useState} from "react";

// const LastProductInDbPic = ({lastProductUrl}) => {
//     const [lastProduct, setLastProduct] = useState([]);
//     console.log(lastProductUrl)
//     useEffect(() => {
//     const fetchData = async () => {
//         try {
//             console.log(lastProductUrl)
//             const response = await fetch(`admin/productos/${lastProductUrl}`)
//             const json = await response.json()
//             setLastProduct(json.response.product);               
//         } catch (error) {
//             console.log(error)
//         }
//     };
//     fetchData()
//     }, [])

//     console.log(lastProduct)

//   return (
//       <>
//       <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={`/images/products/${lastProduct.productImg}`} alt=" Mesa Pavo "/>
//       </>
//   )
// }

// export default LastProductInDbPic