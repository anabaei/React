
/// I want to search be on a form of todos be O(1)
// how to save todo in array


import { useState } from "react";

const Todo2 = () => {
const [input, setInput] = useState('')
const [result, setResult] = useState([])

const handleSubmit = () =>{
    console.log(input)
    if(input){
        fetch('https://jsonplaceholder.typicode.com/todos',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer yourAccessToken'
            }
        }).then(res => res.json()).then(data=> setResult(data))
        .catch((e)=> console.log(e.message))
    }
}
const sort= (e)=>{
    const t = e.target.innerHTML
    const tempRes = [...result]
    sw
    switch (t) {
        case "title":
            tempRes.sort((a,b)=> (a.title.localCompare(b.title));
        case "id":
            tempRes.sort((a,b)=> a.id-b.id)
        default:
            tempRes.sort((a,b)=> a.completed-b.completed)
    }
    
    setResult(tempRes)
}


    return<div>
        <input onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleSubmit}>submit</button> 

        {input}
        <table style={{border: `1px solid black`}}>
            <thead>
                <tr name="ss">
                    <td name="title" onClick={sort}>title </td>
                    <td name="com"  onClick={sort}>completed</td>
                    <td name="id"  onClick={sort}>id</td>
                </tr>
            </thead>
            <tbody style={{border: `1px solid black`}}>
        {result.map((item,index)=>{
            return(
                
                <tr key={index}>
                <td>
                    {item.title}
                </td>
                <td>
                    {item.completed.toString()}
                   
                </td>
                <td>
                    {item.userId}
                </td>
                </tr>
               
                
            )
        })}
         </tbody>
        </table>
    </div>
}

export default Todo2;
=======
import {useState} from 'react';

export const Accor = () => {
   
    const [active, setActive] = useState({})
     
    const accordionData = [
        { title: 'Title 1', text: 'Some text for Title 1' },
        { title: 'Title 2', text: 'Some text for Title 2' },
        { title: 'Title 3', text: 'Some text for Title 3' },
        { title: 'Title 4', text: 'Some text for Title 4' },
      ];

    
      const toggleAccor = (index) =>{
        const activecp = {...active}
        activecp[index] = !activecp[index]

        const aa = 1
       if(index in active){
           const aa= 2 
           console.log(aa)
        const activecp = {...active}
        delete activecp[index]
        setActive(activecp)
       }
       else {
        const activep = {...active}
        activep[index] = true
        setActive(activep)
       }
    
      }

    return<div>
     {accordionData.map((item, index)=> {
      return(
        <span key={`${index}-span`}>
            .
            <div key={`${index}-title`} onClick={()=>toggleAccor(index)}> {item.title} </div>
            <div key={index} className={`${index in active ? `dn`: ''}`} style={{backgroundColor: `red`}}> {item.text} </div>
        </span>
     
      )
     }
     )}
    </div>
} 

