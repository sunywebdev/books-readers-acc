import {
	Backdrop,
	Button,
	CircularProgress,
	Container,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import contact from "../../Images/contact.jpg";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const ContactUs = () => {
	const [submitting, setSubmitting] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		setSubmitting(true);
		axios
			.post(`${process.env.REACT_APP_SERVER_API}/mails`, data)
			.then(function (response) {
				setSubmitting(false);
				Swal.fire({
					icon: "success",
					title: "Mail Send Successfully",
					showConfirmButton: true,
					timer: 2500,
				});
				reset();
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<>
			<Header />
			<Container sx={{ py: 5 }}>

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

export default ContactUs;
