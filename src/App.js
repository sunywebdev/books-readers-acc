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
import AllBooksList from "./Pages/Dashboard/AllBooksList/AllBooksList";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import ResetPass from "./Pages/ResetPass/ResetPass";
import SignUp from "./Pages/SignUp/SignUp";
import SingleBook from "./Pages/SingleBook/SingleBook";
import AddReview from "./Pages/AddReview/AddReview";
import MyReviews from "./Pages/Dashboard/MyReviews/MyReviews";
import PageRols from "./Pages/Dashboard/PageRols/PageRols";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
						<Route
							path='/addreviews'
							element={
								<PrivateRoute>
									<AddReview />
								</PrivateRoute>
							}
						/>
						<Route path='/allbooks' element={<AllBooks />} />
						<Route
							path='/book/:id'
							element={
								<PrivateRoute>
									<SingleBook />
								</PrivateRoute>
							}
						/>
						<Route path='/aboutus' element={<AboutUs />} />
						<Route path='/contactus' element={<ContactUs />} />
						<Route exact path='/dashboard' element={<Dashboard />}>
							<Route
								path='/dashboard'
								element={
									<PrivateRoute>
										<Profile />
									</PrivateRoute>
								}
							/>
							<Route
								path='/dashboard/addbook'
								element={
									<AdminRoute>
										<AddBooks />
									</AdminRoute>
								}
							/>
							<Route
								path='/dashboard/allbooks'
								element={
									<AdminRoute>
										<AllBooksList />
									</AdminRoute>
								}
							/>
							<Route
								path='/dashboard/allmails'
								element={
									<AdminRoute>
										<AllMails />
									</AdminRoute>
								}
							/>
							<Route
								path='/dashboard/userRoles'
								element={
									<AdminRoute>
										<PageRols />
									</AdminRoute>
								}
							/>
							<Route
								path='/dashboard/allusers'
								element={
									<AdminRoute>
										<AllUsers />
									</AdminRoute>
								}
							/>
							<Route
								path='/dashboard/allreviews'
								element={
									<AdminRoute>
										<AllReviews />
									</AdminRoute>
								}
							/>
							<Route
								path='/dashboard/myreviews'
								element={
									<PrivateRoute>
										<MyReviews />
									</PrivateRoute>
								}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
