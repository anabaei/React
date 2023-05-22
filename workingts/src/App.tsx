import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Fetch from './components/FetchData'
import Card from './components/Card'
import './App.css';
import sortedStations from './components/SortStations'

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
  const typeOptions = [
    "Mesla Supercharger",
    "QAE Combo CCS",
    "SHAdeMO",
    "T1772 (T-plug)",
  ];

  const [selected, setSeleted] = useState(1);
  const [stations, setStations] = useState([])
  const [sortType, setSortType] = useState()
  
  const sortedResults = sortedStations(stations, sortType)
  console.log(">>> ",sortedResults)

  useEffect(() => {
    const res = async ()=>{
      const result =  await Fetch(selected)
      console.log(result.data)
      setStations(result.data)
      // setSeleted(result.data.id)
    }
    res()    
  }, [selected])
   
  return (
    <div className="App">
     
       <Header 
       options={options}
       setSelected = {setSeleted}
       selected={selected}
       setSortType={setSortType}
       sortType={sortType}
       types={typeOptions}
       />

       {sortedResults ? (
       sortedResults.map((station:any)=>(
        <Card id={station.id} 
        name={station.name} 
        year = {station.name}
        />
       ))):
       
       <div>
        no data
       </div>
      
      
      }
       

      
    </div>
  );
}

export default App;
