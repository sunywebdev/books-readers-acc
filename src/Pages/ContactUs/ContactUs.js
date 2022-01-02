import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import contact from "../../Images/contact.jpg";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const ContactUs = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		reset();
	};
	return (
		<>
			<Header />
			<Container sx={{ pt: 2, pb: 5 }}>
				<Typography
					className='textColor'
					sx={{ fontWeight: 900, mb: 4 }}
					variant='h3'
					component='div'
					gutterBottom>
					Contact Us
				</Typography>

				<Grid alignItems='center' container spacing={2}>
					<Grid item md={4} xs={12}>
						<img
							src={contact}
							style={{ width: "300px", height: "450px", margin: "0 auto" }}
							alt=''
						/>
					</Grid>
					<Grid item md={8} xs={12} sx={{ textAlign: "left" }}>
						<Typography
							className='textColor'
							sx={{ fontWeight: 900, mb: 2 }}
							variant='h4'
							component='div'>
							How Can We Help You?
						</Typography>
						<Typography
							className='textColor'
							sx={{ fontWeight: 900, mb: 2 }}
							variant='subtitle'
							component='div'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
							sequi, doloremque officiis temporibus reiciendis vel sunt natus
							ipsa sed a.
						</Typography>
						<form onSubmit={handleSubmit(onSubmit)} method='post'>
							<Grid container spacing={2}>
								<Grid item md={6} xs={12}>
									<Grid container spacing={2}>
										<Grid item md={12} xs={12}>
											<TextField
												required
												sx={{ width: "100%" }}
												id='outlined-basic'
												name='UserName'
												placeholder='Enter Your Name'
												{...register("userName", { required: true })}
											/>
										</Grid>
										<Grid item md={12} xs={12}>
											<TextField
												required
												sx={{ width: "100%" }}
												id='outlined-basic'
												name='UserEmail'
												type='email'
												placeholder='Enter Your Email'
												{...register("userEmail", { required: true })}
											/>
										</Grid>
										<Grid item md={12} xs={12}>
											<TextField
												required
												sx={{ width: "100%", mb: { md: 2, xs: 0 } }}
												id='outlined-basic'
												placeholder='Subject'
												name='Subject'
												{...register("subject", { required: true })}
											/>
										</Grid>
									</Grid>
								</Grid>
								<Grid item md={6} xs={12}>
									<TextField
										required
										sx={{ width: "100%", mb: 2 }}
										id='"outlined-multiline-flexible'
										placeholder='Message'
										name='Message'
										multiline
										rows={7.3}
										{...register("message", { required: true })}
									/>
								</Grid>
							</Grid>
							<Button
								className='sendButton'
								type='submit'
								variant='contained'
								sx={{
									width: "100%",
									mb: 2,
									px: 3,
									fontWeight: "bold",
									borderRadius: "25px",
								}}>
								Submit
							</Button>
						</form>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default ContactUs;
