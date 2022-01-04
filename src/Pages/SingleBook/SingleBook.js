import {
	Avatar,
	Backdrop,
	Box,
	Button,
	CardContent,
	CardMedia,
	CircularProgress,
	Container,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
	Rating,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import { useForm } from "react-hook-form";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import RateReviewIcon from "@mui/icons-material/RateReview";
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "react-router-dom";
import useAuth from "../../context/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const SingleBook = () => {
	const { user } = useAuth();
	const [submitting, setSubmitting] = useState(false);
	const [value, setValue] = React.useState(0);
	const { handleSubmit, register, reset } = useForm();
	const onSubmit = ({ review, rating }) => {
		setSubmitting(true);
		const userReview = {
			review,
			rating: value,
			bookId: book?.bookId,
			userPhoto: singleUser?.photoURL,
			userName: singleUser?.displayName,
			userEmail: singleUser?.email,
		};
		console.log(userReview);
		axios
			.post(`${process.env.REACT_APP_SERVER_API}/reviews`, userReview)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Review Added Successfully",
					showConfirmButton: true,
					timer: 2500,
				});
				setSubmitting(false);
				reset();
			})
			.catch(function (error) {
				console.log(error);
			});
		reset();
	};

	const [singleUser, setSingleUser] = useState();
	useEffect(() => {
		fetch(
			`${process.env.REACT_APP_SERVER_API}/singleUsers?email=${user?.email}`,
		)
			.then((res) => res.json())
			.then((data) => {
				reset(data);
				setSingleUser(data);
			});
	}, [reset, user?.email]);
	const { id } = useParams();
	const [book, setBook] = useState();
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/books/${id}`)
			.then((res) => res.json())
			.then((data) => {
				reset(data);
				setBook(data);
			});
	}, [id, reset]);
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/reviewss?bookId=${book?.bookId}`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, [book?.bookId, submitting]);

	return (
		<>
			<Header />
			<Container sx={{ py: 5 }}>
				<Grid justifyContent='space-between' container spacing={2}>
					<Grid item md={4} xs={12}>
						<CardMedia
							style={{
								margin: "0 auto",
								maxWidth: "300px",
							}}
							component='img'
							image={book?.imageLink}
							alt=''
						/>

						<Button
							variant='contained'
							sx={{
								width: "100%",
								maxWidth: "300px",
								fontWeight: "bold",
								borderRadius: "25px",
								border: "2px solid",
								my: 1.5,
							}}>
							Read Now
						</Button>
					</Grid>
					<Grid item md={8} xs={12}>
						<CardContent sx={{ textAlign: "left" }}>
							<Typography gutterBottom variant='h4' component='div'>
								{book?.bookName}
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								component='div'
								sx={{ mb: 1 }}>
								Written By <b>{book?.publishedBy}</b>
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								component='div'
								sx={{ mb: 1 }}>
								This edition was published in <b>{book?.bookName}</b> in
								<b>{book?.PublishedIn}</b>
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								component='div'
								sx={{ mb: 1 }}>
								Total <b>120 pages</b>, Written in <b>English</b>
							</Typography>
							<Box display='flex' sx={{ my: 2 }}>
								<Rating name='read-only' value='5' readOnly />
								<Typography
									variant='button1'
									sx={{ fontWeight: "bold", pt: 0.5, pl: 1.5 }}>
									5 (500)
								</Typography>
							</Box>
							<Typography variant='body2' color='text.secondary'>
								{book?.details}
							</Typography>
						</CardContent>
						<Accordion>
							<AccordionSummary
								aria-controls='panel1a-content'
								id='panel1a-header'>
								<Typography
									variant='body1'
									sx={{ fontWeight: "bold", mr: 1.5 }}>
									Add Your Review
								</Typography>
								<RateReviewIcon />
							</AccordionSummary>
							<AccordionDetails>
								<form onSubmit={handleSubmit(onSubmit)}>
									<Box display='flex' flexDirection='column'>
										<Box display='flex'>
											<Rating
												sx={{ fontSize: 40 }}
												name='simple-controlled'
												value={value}
												onChange={(event, newValue) => {
													setValue(newValue);
												}}
											/>
											<Typography variant='h4' sx={{ pt: 0.4, pl: 1.5 }}>
												{value || 0}
											</Typography>
										</Box>

										<TextField
											required
											placeholder='Rating'
											value={value}
											sx={{ display: "none" }}
											{...register("rating", { required: true })}
										/>
										<TextField
											multiline
											rows={4}
											required
											placeholder='Your Review'
											{...register("review", { required: true })}
										/>
										<Button
											type='submit'
											variant='contained'
											sx={{
												width: "100%",
												maxWidth: "300px",
												fontWeight: "bold",
												borderRadius: "25px",
												border: "2px solid",
												my: 1.5,
											}}>
											Post Review
										</Button>
									</Box>
								</form>
							</AccordionDetails>
						</Accordion>
						<Paper elevation={3} sx={{ mt: 5 }}>
							<Typography variant='h4' sx={{ fontWeight: "bold", pt: 1 }}>
								Community Reviews
							</Typography>
							{reviews.length > 0 ? (
								<List
									sx={{
										width: "100%",
										bgcolor: "background.paper",
									}}>
									{reviews.map((review) => (
										<>
											<ListItem alignItems='flex-start'>
												<ListItemAvatar>
													<Avatar alt='' src={review?.userPhoto} />
												</ListItemAvatar>
												<ListItemText
													primary={review?.userName}
													secondary={
														<React.Fragment>
															<Typography
																sx={{ display: "inline" }}
																component='span'
																variant='body2'
																color='text.primary'>
																{review?.rating}{" "}
																<StarIcon fontSize='5px' sx={{ mr: 1 }} />
															</Typography>
															{review?.review}
														</React.Fragment>
													}
												/>
											</ListItem>
											<Divider variant='inset' component='li' />
										</>
									))}
								</List>
							) : (
								<Typography
									gutterBottom
									variant='h6'
									component='div'
									sx={{ my: 2 }}>
									No Reviews
								</Typography>
							)}
						</Paper>
					</Grid>
				</Grid>
				<Backdrop
					sx={{
						color: "#fff",
						zIndex: (theme) => theme.zIndex.drawer + 1,
					}}
					open={submitting}>
					<CircularProgress color='inherit' />
				</Backdrop>
			</Container>
			<Footer />
		</>
	);
};

export default SingleBook;
