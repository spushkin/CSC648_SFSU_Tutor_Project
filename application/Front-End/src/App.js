import logo from "./logo.svg";
import "./App.css";
import Index from "./pages/Index";
import About from "./pages/About";
import Tutors from "./pages/Tutors";
import Template from "./pages/Template";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JovannyRamos from "./pages/JovannyRamos";
import SiarheiPushkin from "./pages/SiarheiPushkin";
import DaivikPurani from "./pages/DaivikPurani";
import EsauBMedina from "./pages/EsauBMedina";
import WilliamAmbriz from "./pages/WilliamAmbriz";
import AksharGothi from "./pages/AksharGothi";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SignUpStudent from "./pages/SignUpStudent";
import Dashboard from "./pages/Dashboard";
import TutorInfo from "./pages/TutorInfo";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/about" element={<About />} />
					<Route path="/tutors" element={<Tutors />} />
					<Route path="/template" element={<Template />} />
					<Route path="/TutorInfo" element={<TutorInfo />} />
					<Route path="/jovannyramos" element={<JovannyRamos />} />
					<Route path="/siarheipushkin" element={<SiarheiPushkin />} />
					<Route path="/daivikpurani" element={<DaivikPurani />} />
					<Route path="/EsauBMedina" element={<EsauBMedina />} />
					<Route path="/williamambriz" element={<WilliamAmbriz />} />
					<Route path="/akshargothi" element={<AksharGothi />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/studentsignup" element={<SignUpStudent />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
