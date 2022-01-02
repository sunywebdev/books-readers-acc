import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import ActiveMembers from "./ActiveMembers/ActiveMembers";
import Banner from "./Banner/Banner";
import Books from "./Books/Books";
import Comments from "./Comments/Comments";

const HomePage = () => {
	return (
		<div>
			<Header />
			<Banner />
			<Books />
			<ActiveMembers />
			<Comments />
			<Footer />
		</div>
	);
};

export default HomePage;
