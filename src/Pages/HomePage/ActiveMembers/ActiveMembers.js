import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ActiveMembers = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/users`)
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	return (
		<Container sx={{ pt: 5 }}>
			<Typography
				className='textColor'
				sx={{ fontWeight: 900, mb: 3.5 }}
				variant='h4'
				component='div'
				gutterBottom>
				Our Active Members
			</Typography>
			<Grid container spacing={2}>
				{users.map((user) => (
					<Grid item md={2} sm={3} xs={6}>
						<Card
							className='borderColor'
							sx={{
								py: 2,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								alignContent: "center",
								overflow: "visible",
								border: "1px solid ",
							}}>
							<CardMedia
								component='img'
								className='borderColor'
								style={{
									borderRadius: "50%",
									width: "70px",
									height: "70px",
									boxShadow: " 4px 24px 34px 1px rgba(0,0,0,0.16)",
									backgroundColor: "white",
								}}
								image={user?.photoURL}
								alt=''
							/>
							<Typography
								gutterBottom
								variant='button'
								component='div'
								className='textColor'
								sx={{ mt: 1.5, fontWeight: "bold" }}>
								{user?.displayName}
							</Typography>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default ActiveMembers;
