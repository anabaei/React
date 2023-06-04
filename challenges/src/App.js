

import Search from './Assessments/search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import InfiniteScrollComponent from './Assessments/infinit';
import {useState} from 'react'


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
        <Route path="/" element={<InfiniteScrollComponent />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>  
  );
}

export default App;
