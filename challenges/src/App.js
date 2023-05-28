
import Ecommerce from './Assessments/ecommerce'
import Search from './Assessments/search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ImageDetails from './Assessments/imageDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ecommerce />} />
        <Route path="/details" element={<ImageDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>  
  );
}

export default App;
