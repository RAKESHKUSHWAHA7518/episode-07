 
 import { useRouteError } from "react-router-dom";
 import Header from "./Header";
 
 const Error =() =>{

    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <Header/>
            <h1> Error 404 found</h1>
            <h2>This page is not present</h2>
            <h3>
               {err.status}:
               {err.statusText}<br></br>
                
                </h3>
        </div>
    )
 }

 export default Error;