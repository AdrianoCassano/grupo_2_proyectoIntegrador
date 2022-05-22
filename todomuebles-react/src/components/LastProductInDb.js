import React, { useEffect, useState} from "react";
// import { Link } from "react-router-dom";
import imagenFondo from '../assets/images/mesaPavo.jpg';
import LastProductInDbInfo from "./LastProductInDbInfo";

function LastProductInDb(){
    const [lastPage, setLastPage] = useState([]);
    // const [lastProductUrl, setLastProductUrl] = useState([]);
    // const [lastProduct, setLastProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("admin/productos")
                const json = await response.json()
                setLastPage(json.response.totalPages);               
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
      }, [])

    // useEffect anidado adentro
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("admin/productos")
    //             const json = await response.json()
    //             setLastPage(json.response.totalPages);
    //             console.log(lastPage)
               
    //             const response2 = await fetch(`admin/productos?page=${lastPage}`)
    //             const json2 = await response2.json()
    //             setLastProductUrl(json2.response.products);
    //             console.log(response2)
                
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     };
    //     fetchData()
    //   }, [])

    // useEffect con async await
    // useEffect(() => {
    //     // declare the async data fetching function
    //     const fetchData = async () => {
    //         // get the data from the api
    //         const response = await fetch(`admin/productos?page=${lastPage}`);
    //         // convert the data to json
    //         const json = await response.json();
    //         // set state with the result
    //         setLastProductUrl(json.url);
    //     }
    //     // call the function
    //     fetchData()
    //     // make sure to catch any error
    //     .catch(console.error);;
    //   }, [])

// con 2 useEffect
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("admin/productos")
//                 const json = await response.json()
//                 setLastPage(json.response.totalPages);               
//             } catch (error) {
//                 console.log(error)
//             }
//         };
//         fetchData()
//       }, [])
//     console.log(lastPage)

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`admin/productos?page=${lastPage}`)
//                 const json = await response.json()
//                 setLastProductUrl(json.response.products.pop().url);               
//             } catch (error) {
//                 console.log(error)
//             }
//         };
//         fetchData()
//       }, [])
//     console.log(lastProductUrl)
      
    return(
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado</h5>
                    </div>
                    {lastPage &&
                        <LastProductInDbInfo lastPage={lastPage}/>
                    }
                </div>
            </div>
        </>
    )
}

export default LastProductInDb;
