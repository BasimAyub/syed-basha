import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/homePage";
import Page1 from "./screens/page1";
import Page2 from "./screens/page2";
import Page3 from "./screens/page3";
import Page4 from "./screens/page4";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/AllaBlomgavor" element={<Page1 />} />
				<Route path="/DesignaBukett" element={<Page2 />} />
				<Route path="/OmPosablomster" element={<Page3 />} />
				<Route path="/Kontakt" element={<Page4 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
