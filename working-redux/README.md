#### Redux
  *  Store holds the state which is global state
  *  Views, dispatches actions (event handlers)
  *  Actions triggers reducers, reducers update State which state update UI

#### Redux Toolkit 
* Create store.js
```
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```
* provide it at index.js root


#### Use Selector
* is a react hook to get global state from store in view
```javascript

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
```