#### Redux
  *  `Store` holds the state which is global state
  *  `Views`, dispatches actions (event handlers)
  *  `Actions` triggers reducers, reducers update State which state update UI

#### Redux Toolkit 
* Create store.js
```
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {reducerName: reducerNameyouImport},
})
```
* provide it at index.js root one time

* Create Actions

* Use Selector is a react hook to get global state from store in view
```javascript

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  //state
  // counter = reducername you had in store, 
  // value is the actual variable which is affected on actions at reducer
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
   return (<div>
 
     <button onClick={() => dispatch(increment())}> Increament </button> 
     
     <button  onClick={() => dispatch(decrement())}> Decrement </button>  
      <h1>{value}</h1>
```