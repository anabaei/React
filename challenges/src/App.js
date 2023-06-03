
import Form from './Assessments/form'
import Search from './Assessments/search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ImageDetails from './Assessments/imageDetails';
import Starrating from './Assessments/starrating';
import {useState} from 'react'
import { SessionProvider } from './Assessments/sessionContext';
import Quize from './Assessments/quize';

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
     
        <Route path="/" element={<Starrating />} />
        <Route path="/details" element={<ImageDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>  
  );
}

export default App;
