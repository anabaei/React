// state sortby, setSortby
// get array return an array

import { createContext, useContext } from "react";
import {MyContext} from './globalstate';


function Sort() {
    const {myValues, handleSetValue} = useContext(MyContext);
   
return<div>
    sort {myValues}
    <input onChange={(e)=> handleSetValue(e.target.value)} />
</div>
}

export default Sort;