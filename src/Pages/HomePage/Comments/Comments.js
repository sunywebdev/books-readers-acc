import { Button, CardMedia, Container } from "@mui/material";
import React from "react";
import SwiperCore, { Pagination } from "swiper";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";

import RateReviewIcon from "@mui/icons-material/RateReview";
SwiperCore.use([Pagination]);

const Comments = () => {
	return (
		<Container sx={{ pt: 5 }}>
			<Typography
				className='textColor'
				sx={{ mb: 2, fontWeight: 900 }}
				variant='h4'
				component='div'
				gutterBottom>
				Reviews
			</Typography>
			<Swiper
				loop={true}
				grabCursor={true}
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					300: {
						slidesPerView: 1,
					},
					550: {
						slidesPerView: 2,
					},
					900: {
						slidesPerView: 3,
					},
				}}
				className='mySwiper'>
				{Array.from({ length: 6 }).map((_, idx) => (
					<SwiperSlide>
						<Box>
							<Card
								className='borderColor'
								sx={{
									mt: 5,
									mx: 1.5,
									mb: 1,
									pb: 2,
									minHeight: "250px",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									alignContent: "center",
									overflow: "visible",
									border: "2px solid ",
								}}>
								<CardMedia
									component='img'
									className='borderColor'
									style={{
										marginTop: -35,
										borderRadius: "50%",
										width: "80px",
										height: "80px",
										border: "5px solid ",
										backgroundColor: "white",
									}}
									image='https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg'
									alt=''
								/>
								<Typography
									gutterBottom
									variant='h6'
									component='div'
									className='textColor'
									sx={{ mt: 1.5, fontWeight: "bold" }}>
									Mr. John Doe
								</Typography>

								<Typography variant='body2' sx={{ mt: 1, px: 1 }}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
									nobis dolorem nemo inventore nihil, id eos sint molestias eum
									esse!
								</Typography>
							</Card>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
			<Link to='addreviews' style={{ textDecoration: "none" }}>
				<Button
					variant='contained'
					sx={{
						px: 3,
						fontWeight: "bold",
						borderRadius: "25px",
						border: "2px solid",
						my: 1.5,
					}}>
					<RateReviewIcon sx={{ mr: 1.5 }} />
					Add Your Review
				</Button>
			</Link>
		</Container>
	);
};
export default Comments;
