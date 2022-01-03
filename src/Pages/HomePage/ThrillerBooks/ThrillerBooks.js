import { Button, Card, CardMedia, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Pagination, Autoplay]);

const Books = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/books`)
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);

	return (
		<Container sx={{ pt: 5 }}>
			<Typography
				className='textColor'
				sx={{ fontWeight: 900, mb: 3.5, color: "#02598b" }}
				variant='h4'
				component='div'
				gutterBottom>
				Thriller
			</Typography>

			<Swiper
				loop={true}
				grabCursor={true}
				autoplay={{ delay: 1500 }}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					300: {
						slidesPerView: 2,
					},
					550: {
						slidesPerView: 3,
					},
					900: {
						slidesPerView: 6,
					},
				}}
				className='mySwiper'>
				{books.map((book) => (
					<SwiperSlide>
						<Link to={`/book/${book?._id}`} style={{ textDecoration: "none" }}>
							<Card sx={{ border: 0, boxShadow: 0 }}>
								<CardMedia
									style={{
										width: "150px",
										height: "250px",
										margin: "0 auto",
									}}
									component='img'
									image={book?.imageLink}
									alt=''
								/>
							</Card>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
			<Link
				to='/allbooks'
				style={{ textDecoration: "none", margin: "15px auto" }}>
				<Button
					variant='contained'
					sx={{
						px: 3,
						fontWeight: "bold",
						borderRadius: "25px",
						border: "2px solid",
						my: 0.5,
					}}>
					View More Books
				</Button>
			</Link>
		</Container>
	);
};

export default Books;
