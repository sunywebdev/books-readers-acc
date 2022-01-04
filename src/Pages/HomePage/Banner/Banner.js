import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import image1 from "../../../Images/1.jpg";
import image2 from "../../../Images/2.jpg";
import image3 from "../../../Images/3.jpg";
import image4 from "../../../Images/4.jpg";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
SwiperCore.use([EffectFade, Autoplay]);

const Banner = () => {
	return (
		<Container sx={{ pt: 5 }}>
			<Grid
				justifyContent='space-between'
				alignItems='center'
				container
				spacing={2}>
				<Grid item md={7} xs={12} sx={{ textAlign: "left" }}>
					<Typography
						variant='h3'
						component='div'
						sx={{ fontWeight: "bold", mb: 3, color: "#02598b" }}>
						Books Readers Associations
					</Typography>
					<Typography variant='body1' component='div' sx={{ color: "#02598b" }}>
						Welcome to the Books Readers Associations, a book discussion group!
						Join us here to celebrate the love of reading, access exclusive
						content from many of the world's greatest authors, engage in
						discussions with members about books, share book suggestions and
						much more.
					</Typography>
					<Link
						style={{ textDecoration: "none", color: "black" }}
						sx={{ my: 1 }}
						exact
						to='/aboutus'>
						<Button
							variant='contained'
							sx={{
								px: 3,
								fontWeight: "bold",
								borderRadius: "25px",
								border: "2px solid",
								my: 1.5,
							}}>
							Learn More
						</Button>
					</Link>
				</Grid>
				<Grid item md={5} xs={12}>
					<Swiper
						autoplay={{ delay: 1500 }}
						loop={true}
						grabCursor={true}
						slidesPerView={1}
						effect={"fade"}
						className='mySwiper'>
						<SwiperSlide>
							<img
								src={image1}
								style={{ width: "300px", height: "450px", margin: "0 auto" }}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={image2}
								style={{ width: "300px", height: "450px", margin: "0 auto" }}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={image3}
								style={{ width: "300px", height: "450px", margin: "0 auto" }}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={image4}
								style={{ width: "300px", height: "450px", margin: "0 auto" }}
								alt=''
							/>
						</SwiperSlide>
					</Swiper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Banner;
