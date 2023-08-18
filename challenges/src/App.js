

import Search from './Assessments/search'
import CssBox from './Assessments/cssBox'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ThrottledButton from './Assessments/throtle';
import {useState} from 'react'

import {Fetchs} from './Assessments/fetch'
import Todo2 from './Assessments/todo2'

import {Accor} from './Assessments/todo2'


function App() {
  
  const [loggedIn, setLoggetIn] = useState(false)


  return (
    <Router>
       {/* SessionProvider */}
      <Routes>
      <Route
          path="/somethingnew"
          element={
            loggedIn ? <div>Logged In</div> : <div>It is logged out, need to sign in</div>
          }
        />

        <Route path="/" element={<Todo2 />} />


        <Route path="/CssBox" element={<CssBox />} />
      </Routes>
    </Router>  
  );
}

export default App;
