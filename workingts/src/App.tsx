import React, {useState} from 'react';
import Header from './components/Header'
import './App.css';

function App() {
  const options = [
    {
      id: 1,
      name: "amir",
    },
    {
      id: 2,
      name: "nima",
    },
    {
      id: 3,
      name: "arash",
    },
  ];

  const [selected, setSeleted] = useState(0);

  return (
    <div className="App">
     
       <Header 
       options={options}
       setSelected = {setSeleted}
       selected={selected}
       />
      
    </div>
  );
}

export default App;
