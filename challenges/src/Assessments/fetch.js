
import { useState, useEffect } from "react"

export const Fetchs = () => {

    const apiUrl = "https://jsonplaceholder.typicode.com/todos";
    const aa = [1,2,3,4,5,6,7]
    function callApi() {
    fetch(apiUrl)
        .then((res) => res.json())
       // .then((json) => console.log(json));
    }
    
    async function callApi2(id) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
       
        const json = await res.json();
       return json.id
      }
      
      callApi();
     function callApi22(item){
        console.log(">>>", item)
        (async(item)=>{
            const r = await callApi2(item)
            return r;
        })()
    };

    useEffect(() => {

    //  aa.forEach(async(item)=>{
    //   const res =   await callApi2(item)
    //   //console.log(item, res)
    //  })
    //  aa.map(async(item, index)=>{
    //     const res =   await callApi2(item)
    //     console.log(item, res)
    //  })
     
     (async()=>{
         for (const fn of aa) {
            const res =   await callApi2(fn)
        console.log(res)
          }
     })()

    },[])

    return(
        <div>
            <h1>
            fetchdddddsds
         {aa.map((item, index)=>
            <div key={index}>
                {item}
            </div>
         
         )}

            </h1>
        </div>
    )
}
