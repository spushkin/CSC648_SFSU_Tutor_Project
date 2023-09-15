import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import Template from './pages/Template';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import JovannyRamos from './pages/JovannyRamos';
import AksharGothi from './pages/AksharGothi';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />  
          <Route path="/about" element={<About />} />
          <Route path="/template" element={<Template />} />
          <Route path="/jovannyramos" element={<JovannyRamos />} />
          <Route path="/akshargothi" element={<AksharGothi />} />
         </Routes>
        </Router>
    </div>
  );
}

export default App;
