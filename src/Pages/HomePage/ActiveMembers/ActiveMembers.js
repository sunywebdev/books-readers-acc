import {
	Box,
	Card,
	CardMedia,
	Container,
	Grid,
	Modal,
	Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const ActiveMembers = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/users`)
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	const [open, setOpen] = React.useState(false);
	const [singleUser, setSingleUser] = useState();
	const handleOpen = async (email) => {
		setOpen(true);
		const data = await axios.get(
			`${process.env.REACT_APP_SERVER_API}/singleUsers?email=${email}`,
		);
		setSingleUser(data.data);
	};
	console.log(singleUser);
	const handleClose = () => setOpen(false);

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
		<Container sx={{ py: 5 }}>
			{users.length ? (
				<>
					<Typography
						className='textColor'
						sx={{ fontWeight: 900, mb: 3.5, color: "#02598b" }}
						variant='h4'
						component='div'
						gutterBottom>
						Our Active Members
					</Typography>
					<Grid container spacing={2} alignItems='stretch'>
						{users.map((user) => (
							<Grid item md={2} sm={3} xs={6} style={{ display: "flex" }}>
								<Card
									onClick={() => handleOpen(user?.email)}
									className='borderColor'
									sx={{
										width: "100%",
										cursor: "pointer",
										py: 2,
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										alignContent: "center",
										overflow: "visible",
										border: "1px solid #02598b",
										boxShadow: " 4px 24px 34px 1px rgba(0,0,0,0.16)",
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
										sx={{ mt: 1.5, fontWeight: "bold", color: "#02598b" }}>
										{user?.displayName}
									</Typography>
								</Card>
							</Grid>
						))}
					</Grid>
				</>
			) : (
				<PropagateLoader size={10} color={"#35D5B6"} />
			)}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Card
						sx={{
							px: 1.5,
							mb: 1,
							py: 2,
							minHeight: "250px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							alignContent: "center",
							overflow: "hidden",
							boxShadow: "none",
							textAlign: "center",
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
							image={singleUser?.photoURL}
							alt=''
						/>
						<Typography
							variant='h5'
							component='div'
							sx={{ fontWeight: "bold", mt: 2, color: "#02598b" }}>
							{singleUser?.displayName}
						</Typography>
						<Typography
							variant='body'
							component='div'
							sx={{ fontWeight: "bold", mt: 2, color: "#02598b" }}>
							{singleUser?.title}
						</Typography>
						<Typography
							variant='body1'
							component='div'
							sx={{ my: 2, color: "#02598b" }}>
							{singleUser?.email}
						</Typography>

						<Typography
							variant='subtitle'
							component='div'
							sx={{ color: "#02598b" }}>
							{singleUser?.details}
						</Typography>
					</Card>
				</Box>
			</Modal>
		</Container>
	);
};

export default ActiveMembers;
