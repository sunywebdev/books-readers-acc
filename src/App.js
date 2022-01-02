import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AllBooks from "./Pages/AllBooks/AllBooks";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AddBooks from "./Pages/Dashboard/AddBooks/AddBooks";
import Dashboard from "./Pages/Dashboard/Dashboard";
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
					<Route path='/aboutus' element={<AboutUs />} />
					<Route path='/contactus' element={<ContactUs />} />
					<Route exact path='/dashboard' element={<Dashboard />}>
						<Route path='/dashboard/addbook' element={<AddBooks />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
