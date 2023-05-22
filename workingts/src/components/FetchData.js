import React, {useEffect} from 'react'

const Fetch = async (id) =>{ 
    
//    const resultResponse =  await fetch(`https://reqres.in/api/users/${id}`)
const resultResponse =  await fetch(`https://reqres.in/api/user`)

   const stationsData = await resultResponse.json();
   
   return stationsData
}

export default Fetch