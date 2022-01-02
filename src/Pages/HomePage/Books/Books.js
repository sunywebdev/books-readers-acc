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
import React from "react";
import { Link } from "react-router-dom";

const Books = () => {
	return (
		<Container sx={{ pt: 5 }}>
			<Typography
				className='textColor'
				sx={{ fontWeight: 900, mb: 3.5 }}
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
				{Array.from({ length: 6 }).map((_, idx) => (
					<Grid item md={4} xs={12}>
						<Link to='/singlebook' style={{ textDecoration: "none" }}>
							<Card sx={{ border: 0, boxShadow: 0 }}>
								<CardActionArea sx={{ display: "flex" }}>
									<CardMedia
										style={{
											width: "150px",
											height: "250px",
											margin: "0 auto",
										}}
										component='img'
										image='https://covers.openlibrary.org/w/id/8303392-M.jpg'
										alt=''
									/>
									<CardContent sx={{ textAlign: "left" }}>
										<Typography gutterBottom variant='h6' component='div'>
											Harry Potter and the Goblet of Fire
										</Typography>
										<Typography
											gutterBottom
											variant='body2'
											component='div'
											sx={{ fontWeight: "bold", mb: 1 }}>
											By Xulon Press
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											Harry Potter is midway through his training as a wizard
											and his coming of age. Harry wants to get away from the
											pernicious Dursleys and go to the International Quidditch
											Cup.
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
		</Container>
	);
};

export default Books;
