import {
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
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const AllBooks = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/books`)
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);

	return (
		<>
			<Header />
			<Container sx={{ py: 5 }}>
				<Typography
					className='textColor'
					sx={{ fontWeight: 900, mb: 3.5 }}
					variant='h4'
					component='div'
					gutterBottom>
					All Books
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
											<Typography gutterBottom variant='h6' component='div'>
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
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default AllBooks;
