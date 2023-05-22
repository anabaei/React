import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./components/redux/counter";

function App() {
  //state
  const value = useSelector((state) => state.reducecounter.value);
  // to call actions in redux, we can use dispatch hook
  const dispatch = useDispatch();

  const handleEvent = (e) => {
    console.log(e.target.txt);
  };

  const debounce = (cb, delay) =>{
   let timer
   return function(...arg){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      cb(...arg)
    }, delay)
   }
  }
 const handleChange = debounce((e) =>{
   console.log(e.target.value)
 }, 1000)

  return (
    <body>
       <input onChange={handleChange}/>
       
      <button onClick={() => dispatch(increment())}> InNNNNNN </button>

      <button onClick={() => dispatch(decrement())}> DeCC </button>
       
        <button onClick={handleEvent}>
          <li value="1">1</li>
          <li value="1">1</li>
          <li value="1">1</li>
          <button value="222">kk</button>
        </button>
      <div>
      <h1>{value}</h1>
      </div>
    </body>
  );

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
