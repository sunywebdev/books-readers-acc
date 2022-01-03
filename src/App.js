import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AllBooks from "./Pages/AllBooks/AllBooks";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AddBooks from "./Pages/Dashboard/AddBooks/AddBooks";
import AllMails from "./Pages/Dashboard/AllMails/AllMails";
import AllReviews from "./Pages/Dashboard/AllReviews/AllReviews";
import AllUsers from "./Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Dashboard/Profile/Profile";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import ResetPass from "./Pages/ResetPass/ResetPass";
import SignUp from "./Pages/SignUp/SignUp";
import SingleBook from "./Pages/SingleBook/SingleBook";

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/login' element={<Login />} />
						<Route path='/resetpass' element={<ResetPass />} />
						<Route path='/allbooks' element={<AllBooks />} />
						<Route path='/singlebook' element={<SingleBook />} />
						<Route path='/aboutus' element={<AboutUs />} />
						<Route path='/contactus' element={<ContactUs />} />
						<Route exact path='/dashboard' element={<Dashboard />}>
							<Route path='/dashboard' element={<Profile />} />
							<Route path='/dashboard/addbook' element={<AddBooks />} />
							<Route path='/dashboard/allmails' element={<AllMails />} />
							<Route path='/dashboard/allusers' element={<AllUsers />} />
							<Route path='/dashboard/allreviews' element={<AllReviews />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
