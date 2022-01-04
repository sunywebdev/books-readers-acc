import {
	Button,
	Container,
	Grid,
	TextField,
	Typography,
	CircularProgress,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../context/useAuth";

const AddReview = () => {
	const { user } = useAuth();
	const [singleUser, setSingleUser] = useState();
	const { register, handleSubmit, reset } = useForm();
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
	const [submitting, setSubmitting] = useState(false);

	const onSubmit = ({ review }) => {
		setSubmitting(true);
		const userReview = {
			review,
			bookId: "About-Website",
			userPhoto: singleUser?.photoURL,
			userName: singleUser?.displayName,
			userEmail: singleUser?.email,
		};
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

	return (
		<Container sx={{ mt: { md: 0, xs: 7 } }}>
			<Grid
				className='color-text'
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: { md: "100vh", xs: "90vh" } }}>
				<Typography
					className='textColor'
					sx={{ mb: 4, fontWeight: 900, color: "#02598b" }}
					variant='h3'
					component='div'
					gutterBottom
					data-aos='fade-right'>
					ADD REVIEW
					<Typography
						variant='caption'
						display='block'
						gutterBottom
						sx={{ color: "red" }}>
						Your posts will appear publicly with your profile name and picture.
						Your posts will appear across the web.
					</Typography>
				</Typography>

				<Grid container spacing={2}>
					<Grid item md={7} xs={12} sx={{ mx: "auto" }}>
						{!submitting ? (
							<form data-aos='fade-left' onSubmit={handleSubmit(onSubmit)}>
								<TextField
									required
									sx={{ width: "100%", mb: 2 }}
									id='"outlined-multiline-flexible'
									placeholder='Share Your Review'
									multiline
									rows={4}
									{...register("review", { required: true })}
								/>
								<Button
									type='submit'
									variant='contained'
									className='button border'
									sx={{
										width: "100%",
										mb: 2,
										px: 3,
										fontWeight: "bold",
										border: "2px solid",
										borderRadius: "25px",
									}}>
									POST REVIEW
								</Button>
							</form>
						) : (
							<Box sx={{ my: 2 }}>
								<CircularProgress className='textColor' sx={{ mx: 0.5 }} />
							</Box>
						)}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AddReview;
