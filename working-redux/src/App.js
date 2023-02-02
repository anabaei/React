
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './components/redux/counter'


function App() {
  //state
  const value = useSelector((state) => state.reducecounter.value)
  // to call actions in redux, we can use dispatch hook
  const dispatch = useDispatch()

  return (<div>
 
     <button onClick={() => dispatch(increment())}> InNNNNNN </button> 
     
     <button  onClick={() => dispatch(decrement())}> DeCC </button>  
      <h1>{value}</h1>
    
    </div>)
  
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    //   <Routes>
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </BrowserRouter>

  
}

export default App;
