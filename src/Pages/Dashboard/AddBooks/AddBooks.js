import {
	Backdrop,
	Button,
	CircularProgress,
	Container,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

const AddBooks = () => {
	const [submitting, setSubmitting] = useState(false);
	const [imageLink, setImageLink] = useState(null);
	const [loading, setLoading] = useState(false);
	const uploadImage = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "books-readers-acc");
		setLoading(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dqdug0ows/image/upload",
			{
				method: "POST",
				body: data,
			},
		);
		const file = await res.json();
		setImageLink(file.secure_url);
		setLoading(false);
	};
	const Input = styled("input")({
		display: "none",
	});
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		setSubmitting(true);
		axios
			.post(`${process.env.REACT_APP_SERVER_API}/books`, data)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Your Book Successfully Added",
					showConfirmButton: false,
					timer: 1500,
				});
				setSubmitting(false);
				reset();
			})
			.catch(function (error) {
				console.log("error", error);
				console.log(error);
			});
		reset();
	};
	return (
		<Container>
			<Typography
				className='textColor'
				sx={{ fontWeight: 900, mb: 3.5 }}
				variant='h4'
				component='div'
				gutterBottom>
				Add New Book
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)} method='post'>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					sx={{
						mt: 3,
						mb: 2,
						mx: "auto",
						border: "1px solid",
						color: "black",
					}}>
					<label
						htmlFor='icon-button-file'
						className='bgColor'
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							margin: "0 9px",
							borderRadius: 5,
						}}>
						<Input
							accept='image/*'
							id='icon-button-file'
							type='file'
							onChange={uploadImage}
						/>
						<Typography sx={{ m: 2 }} variant='h6' component='div' gutterBottom>
							Upload Book Cover Photo
						</Typography>
						<IconButton
							color='primary'
							aria-label='upload picture'
							component='span'>
							<AttachFileIcon fontSize='large' sx={{ fontWeight: "bold" }} />
						</IconButton>
					</label>

					{loading ? (
						<Box sx={{ my: 2 }}>
							<CircularProgress className='textColor' />
						</Box>
					) : (
						<img
							src={imageLink}
							style={{ width: "100px", padding: "5px 0" }}
							alt=''
						/>
					)}
				</Box>
				<TextField
					sx={{ display: "none" }}
					value={imageLink}
					variant='standard'
					{...register("imageLink")}
				/>
				<Grid container spacing={2}>
					<Grid item md={6} xs={12}>
						<Grid container spacing={2}>
							<Grid item md={12} xs={12}>
								<TextField
									required
									sx={{ width: "100%" }}
									id='outlined-basic'
									name='bookName'
									label='Enter Book Name'
									{...register("bookName", { required: true })}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									required
									sx={{ width: "100%" }}
									id='outlined-basic'
									name='publishedBy'
									label='Published By'
									{...register("publishedBy", { required: true })}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									required
									sx={{ width: "100%" }}
									id='outlined-basic'
									name='publishedYear'
									label='Published Year'
									{...register("publishedYear", { required: true })}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									required
									sx={{ width: "100%", mb: { md: 2, xs: 0 } }}
									id='outlined-basic'
									label='Published In'
									name='PublishedIn'
									{...register("PublishedIn", { required: true })}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={6} xs={12}>
						<TextField
							required
							sx={{ width: "100%", mb: 2 }}
							id='"outlined-multiline-flexible'
							label='details'
							name='Details About Book'
							multiline
							rows={4}
							{...register("details", { required: true })}
						/>
						<Grid item md={12} xs={12}>
							<TextField
								required
								sx={{ width: "100%", mb: 2 }}
								id='outlined-basic'
								name='readingLink'
								label='Live Reading Link'
								{...register("readingLink", { required: true })}
							/>
						</Grid>
						<Grid item md={12} xs={12}>
							<TextField
								required
								sx={{ width: "100%" }}
								id='outlined-basic'
								name='bookId'
								value={`${Math.random().toString(36).substring(2, 9)}`}
								label='Book ID'
								{...register("bookId", { required: true })}
							/>
						</Grid>
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
					Add Book
				</Button>
			</form>
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={submitting}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Container>
	);
};

export default AddBooks;
