





import { createContext, useContext, useState } from "react";
import Sort from './sort';

export const MyContext = createContext();



export const Myapp = () =>{
    const [myValues, setMyValues] = useState('a')

    const handleSetValue = (input) =>{
        setMyValues(input)
    }
    const op = 'ss';
    return<div>
        <MyContext.Provider value={{myValues, handleSetValue}} >
        <Sort />
        </MyContext.Provider>
    </div>
}
