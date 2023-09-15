import logo from "./logo.svg";
import "./App.css";
import Index from "./pages/Index";
import About from "./pages/About";
import Template from "./pages/Template";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JovannyRamos from "./pages/JovannyRamos";
import SiarheiPushkin from "./pages/SiarheiPushkin";
import DaivikPurani from "./pages/DaivikPurani";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />  
          <Route path="/about" element={<About />} />
          <Route path="/template" element={<Template />} />
          <Route path="/jovannyramos" element={<JovannyRamos />} />

          <Route path="/siarheipushkin" element={<SiarheiPushkin />} />
          <Route path="/daivikpurani" element={<DaivikPurani />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
