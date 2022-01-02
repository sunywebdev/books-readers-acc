import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllBooks from "./Pages/AllBooks/AllBooks";
import HomePage from "./Pages/HomePage/HomePage";
import SingleBook from "./Pages/SingleBook/SingleBook";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/allbooks' element={<AllBooks />} />
					<Route path='/singlebook' element={<SingleBook />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
