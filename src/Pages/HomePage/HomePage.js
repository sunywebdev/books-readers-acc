import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import ActiveMembers from "./ActiveMembers/ActiveMembers";
import Banner from "./Banner/Banner";
import ThrillerBooks from "./ThrillerBooks/ThrillerBooks";
import Books from "./Books/Books";
import Comments from "./Comments/Comments";
import HorrorBooks from "./HorrorBooks/HorrorBooks";

const HomePage = () => {
	return (
		<div>
			<Header />
			<Banner />
			<Books />
			<ThrillerBooks />
			<HorrorBooks />
			<ActiveMembers />
			<Comments />
			<Footer />
		</div>
	);
};

export default HomePage;
