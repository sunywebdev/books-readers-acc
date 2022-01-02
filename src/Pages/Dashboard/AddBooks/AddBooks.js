import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const AddBooks = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
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
				<Grid container spacing={2}>
					<Grid item md={6} xs={12}>
						<Grid container spacing={2}>
							<Grid item md={12} xs={12}>
								<TextField
									required
									sx={{ width: "100%" }}
									id='outlined-basic'
									name='bookName'
									placeholder='Enter Book Name'
									{...register("bookName", { required: true })}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									required
									sx={{ width: "100%" }}
									id='outlined-basic'
									name='publishedBy'
									placeholder='Published By'
									{...register("publishedBy", { required: true })}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									required
									sx={{ width: "100%" }}
									id='outlined-basic'
									name='publishedYear'
									placeholder='Published Year'
									{...register("publishedYear", { required: true })}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									required
									sx={{ width: "100%", mb: { md: 2, xs: 0 } }}
									id='outlined-basic'
									placeholder='Published In'
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
							placeholder='details'
							name='Details About Book'
							multiline
							rows={7}
							{...register("details", { required: true })}
						/>
						<Grid item md={12} xs={12}>
							<TextField
								required
								sx={{ width: "100%" }}
								id='outlined-basic'
								name='readingLink'
								placeholder='Live Reading Link'
								{...register("readingLink", { required: true })}
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
		</Container>
	);
};

export default AddBooks;
