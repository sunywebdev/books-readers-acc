import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const ThrillerBooks = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/books`)
			.then((res) => res.json())
			.then((data) => setBooks(data.slice(0, 3)));
	}, []);

	return (
		<Container sx={{ py: 5 }}>
			{books.length ? (
				<>
					<Typography
						className='textColor'
						sx={{ fontWeight: 900, mb: 3.5, color: "#02598b" }}
						variant='h4'
						component='div'
						gutterBottom>
						Books We Love
					</Typography>
					<Grid
						justifyContent='space-between'
						alignItems='center'
						container
						spacing={2}>
						{books.map((book) => (
							<Grid item md={4} xs={12}>
								<Link
									to={`/book/${book?._id}`}
									style={{ textDecoration: "none" }}>
									<Card sx={{ border: 0, boxShadow: 0 }}>
										<CardActionArea sx={{ display: "flex" }}>
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
											<CardContent sx={{ textAlign: "left" }}>
												<Typography
													gutterBottom
													variant='h6'
													component='div'
													sx={{ color: "#02598b", fontWeight: "bold" }}>
													{book?.bookName}
												</Typography>
												<Typography
													gutterBottom
													variant='body2'
													component='div'
													sx={{ fontWeight: "bold", mb: 1 }}>
													By {book?.publishedBy}
												</Typography>
												<Typography variant='body2' color='text.secondary'>
													{book?.details.slice(0, 200)}....
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Link>
							</Grid>
						))}
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
									my: 1.5,
								}}>
								View More Books
							</Button>
						</Link>
					</Grid>
				</>
			) : (
				<PropagateLoader size={10} color={"#35D5B6"} />
			)}
		</Container>
	);
};

export default ThrillerBooks;
