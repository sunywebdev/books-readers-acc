import {
	Card,
	CardMedia,
	Container,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";

const ActiveMembers = () => {
	return (
		<Container sx={{ pt: 5 }}>
			<Typography
				className='textColor'
				sx={{ fontWeight: 900, mb: 3.5 }}
				variant='h4'
				component='div'
				gutterBottom>
				Our Active Members
				<Divider className='hr' />
			</Typography>
			<Grid container spacing={2}>
				{Array.from({ length: 12 }).map((_, idx) => (
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
									width: "80px",
									height: "80px",
									boxShadow: " 4px 24px 34px 1px rgba(0,0,0,0.16)",
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
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default ActiveMembers;
