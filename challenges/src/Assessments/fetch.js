
import { useState } from "react"

export const Fetchs = () => {

    const apiUrl = "https://jsonplaceholder.typicode.com/todos";

    function callApi() {
    fetch(apiUrl)
        .then((res) => res.json())
       // .then((json) => console.log(json));
    }
    
    async function callApi2() {
        const res = await fetch(apiUrl);
        console.log(">>", res)
        const json = await res.json();
      
        console.log(json);
      }
      
      callApi();
      callApi2();

    return(
        <div>
            <h1>
            fetchdddddsds
            </h1>
        </div>
    )
}
