
/// I want to search be on a form of todos be O(1)
// how to save todo in array

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
       const aactive = {
        ...active,
        [index]: !active[index]
       }
       setActive(aactive)
       console.log(active)
      

    // second solution 
    //    if(index in active){
    //     const activecp = {...active}
    //     delete activecp[index]
    //     setActive(activecp)
    //    }
    //    else {
    //     const activep = {...active}
    //     activep[index] = true
    //     setActive(activep)
    //    }
    
      }

    return<div>
     {accordionData.map((item, index)=> {
      return(
        <span key={`${index}-span`}>
            .
            <div key={`${index}-title`} onClick={()=>toggleAccor(index)}> {item.title} </div>
            <div key={index} className={`${active[index] ? `dn`: ''}`} style={{backgroundColor: `red`}}> {item.text} </div>
        </span>
     
      )
     }
     )}
    </div>
} 
