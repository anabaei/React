
import Ecommerce from './Assessments/ecommerce'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ImageDetails from './Assessments/imageDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ecommerce />} />
        <Route path="/details" element={<ImageDetails />} />
      </Routes>
    </Router>

    // <div className="App">
    //  <Ecommerce />
    // </div>
  
  );
}

export default App;
