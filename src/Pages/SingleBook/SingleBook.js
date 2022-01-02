import {
	Avatar,
	Box,
	Button,
	CardContent,
	CardMedia,
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
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import { useForm } from "react-hook-form";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import RateReviewIcon from "@mui/icons-material/RateReview";
import StarIcon from "@mui/icons-material/Star";

const SingleBook = () => {
	const [value, setValue] = React.useState(0);
	const { handleSubmit, register, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		reset();
	};
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
							image='https://covers.openlibrary.org/w/id/8303392-M.jpg'
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
								Harry Potter and the Goblet of Fire
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								component='div'
								sx={{ mb: 1 }}>
								Written By <b>Xulon Press</b>
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								component='div'
								sx={{ mb: 1 }}>
								This edition was published in <b>1975</b> in <b>Canada</b>
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
								The entire focus of this novel rests on the determined though
								sometimes woefully mistaken efforts of three British
								families--the Moseleys, the Jarvises, and the Chattertons--to
								arrange suitable marriages for their respective sons and
								daughters. The bulk of the early-nineteenth-century action is
								therefore played out through dinners, social calls, visits to
								summer resorts, and development of various designs employed
								toward the end of matrimony. The "precaution" displayed by Mrs.
								Wilson in guiding her niece Emily Moseley through the
								treacherous shoals toward a sound Christian marriage furnishes
								the novel's title and indicates the author's moral and ethical
								position.
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
							<List
								sx={{
									width: "100%",
									bgcolor: "background.paper",
								}}>
								{Array.from({ length: 5 }).map((_, idx) => (
									<>
										<ListItem alignItems='flex-start'>
											<ListItemAvatar>
												<Avatar
													alt='Remy Sharp'
													src='/static/images/avatar/1.jpg'
												/>
											</ListItemAvatar>
											<ListItemText
												primary='John Doe'
												secondary={
													<React.Fragment>
														<Typography
															sx={{ display: "inline" }}
															component='span'
															variant='body2'
															color='text.primary'>
															5 <StarIcon fontSize='5px' />
														</Typography>
														{
															" — I'll be in your neighborhood doing errands this…"
														}
													</React.Fragment>
												}
											/>
										</ListItem>
										<Divider variant='inset' component='li' />
									</>
								))}
							</List>
						</Paper>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default SingleBook;
