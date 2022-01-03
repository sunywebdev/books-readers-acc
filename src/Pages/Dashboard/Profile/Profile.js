import {
	Button,
	Card,
	CardMedia,
	CircularProgress,
	Container,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import EmailIcon from "@mui/icons-material/Email";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import useAuth from "../../../context/useAuth";

const Profile = () => {
	const { user } = useAuth();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [imageLink, setImageLink] = useState(null);
	const [submitting, setSubmitting] = useState(false);
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
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			imageLink: "",
			title: "",
			details: "",
		},
	});
	const onSubmit = (data) => {
		setSubmitting(true);
		axios
			.put(`${process.env.REACT_APP_SERVER_API}/users/updateUsers`, data)
			.then(function (response) {
				Swal.fire("Success!", "Profile Updated Successfully.", "success");
				setSubmitting(false);
				setOpen(false);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const [singleUser, setSingleUser] = useState();
	useEffect(() => {
		fetch(
			`${process.env.REACT_APP_SERVER_API}/singleUsers?email=${user?.email}`,
		)
			.then((res) => res.json())
			.then((data) => {
				reset(data);
				setSingleUser(data);
			});
	}, [reset, user?.email, user?.photoURL]);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "white",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	return (
		<Container>
			<Grid justifyContent='center' container spacing={3}>
				<Grid item xs={12} sm={12} md={7}>
					<Card
						sx={{
							px: 1.5,
							mb: 1,
							pb: 2,
							minHeight: "250px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							alignContent: "center",
							overflow: "hidden",
						}}>
						<CardMedia
							component='img'
							className='border'
							style={{
								width: "110px",
								height: "110px",
								borderRadius: "50%",
								border: "1px solid",
							}}
							image={singleUser?.photoURL || user?.photoURL}
							alt=''
						/>

						<Typography
							variant='h5'
							component='div'
							sx={{ fontWeight: "bold", mt: 2, color: "#31887D" }}>
							{singleUser?.displayName || user?.displayName}
						</Typography>
						<Typography
							variant='body'
							component='div'
							sx={{ fontWeight: "bold", mt: 2, color: "#31887D" }}>
							{singleUser?.title || "Add Title"}
						</Typography>
						<List>
							<ListItem sx={{ pt: 0 }}>
								<ListItemIcon>
									<EmailIcon sx={{ color: "#31887D" }} />
								</ListItemIcon>
								<ListItemText
									sx={{ color: "#31887D" }}
									primary={singleUser?.email || user?.email}
								/>
							</ListItem>
						</List>
						<Typography
							variant='subtitle'
							component='div'
							sx={{ color: "#31887D" }}>
							{singleUser?.details || "Add Details"}
						</Typography>
					</Card>
					<Button
						onClick={handleOpen}
						variant='contained'
						sx={{
							px: 3,
							fontWeight: "bold",
							borderRadius: "25px",
							border: "2px solid",
							my: 1.5,
						}}>
						Update Profile
					</Button>
				</Grid>
			</Grid>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<Box sx={style}>
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
									<Typography
										sx={{ m: 2 }}
										variant='h6'
										component='div'
										gutterBottom>
										Upload Profile Photo
									</Typography>
									<IconButton
										color='primary'
										aria-label='upload picture'
										component='span'>
										<AttachFileIcon
											fontSize='large'
											sx={{ fontWeight: "bold" }}
										/>
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
							<TextField
								required
								sx={{ width: "100%", mb: 2 }}
								id='outlined-basic'
								name='title'
								placeholder='Your Job Title'
								{...register("title", { required: true })}
							/>
							<TextField
								required
								sx={{ width: "100%", mb: 2 }}
								id='"outlined-multiline-flexible'
								placeholder='About Yourself'
								name='details'
								multiline
								rows={7.3}
								{...register("details", { required: true })}
							/>
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
					</Box>
				</Fade>
			</Modal>
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

export default Profile;
