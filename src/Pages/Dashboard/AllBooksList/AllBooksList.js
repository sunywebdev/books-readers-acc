import {
	Button,
	Container,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

const AllBooksList = () => {
	const [deleted, setDeleted] = useState(false);
	const [books, setBooks] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/books`)
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, [deleted]);

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`${process.env.REACT_APP_SERVER_API}/books/${id}`)
					.then(function (response) {
						Swal.fire("Deleted!", "That book has been removed.", "success");
						setDeleted(true);
					})
					.catch(function (error) {
						console.log(error);
					});
			}
		});
	};
	console.log(books);
	let count = 1;
	return (
		<Container
			sx={{
				mt: { xs: 9, md: 2 },
				minHeight: "100vh",
			}}>
			<Grid>
				<Typography
					className='color-theme'
					sx={{ mb: 3, fw: "bold" }}
					variant='h4'
					component='div'
					gutterBottom>
					All Books
				</Typography>
				<Grid item xs={12} md={12}>
					<Paper
						className='container'
						sx={{ overflow: "auto", maxHeight: "80vh" }}>
						<Table size='small' aria-label='a dense table'>
							<TableHead sx={{ th: { fontWeight: "bold" } }}>
								<TableRow>
									<TableCell className='color-theme' align='left'>
										No
									</TableCell>
									<TableCell className='color-theme' align='left'>
										Photo
									</TableCell>
									<TableCell className='color-theme' align='left'>
										Name
									</TableCell>
									<TableCell className='color-theme' align='left'>
										Author
									</TableCell>
									<TableCell className='color-theme' align='left'>
										Action
									</TableCell>
								</TableRow>
							</TableHead>
							{books?.length > 0 ? (
								<TableBody sx={{ td: { py: 1 } }}>
									{books.map((book) => (
										<TableRow
											key={book?._id}
											sx={{
												"&:last-child td, &:last-child th": { border: 0 },
											}}>
											<TableCell align='left'>{count++}</TableCell>
											<TableCell>
												<img
													src={book?.imageLink || "N/A"}
													alt=''
													width='40px'
													height='55px'
												/>
											</TableCell>
											<TableCell align='left'>
												{book?.bookName || "N/A"}
											</TableCell>
											<TableCell align='left'>
												{book?.publishedBy || "N/A"}
											</TableCell>
											<TableCell align='left'>
												<Button
													className='button border'
													onClick={() => handleDelete(book?._id)}
													sx={{
														fontWeight: "bold",
														border: "2px solid",
														borderRadius: "25px",
													}}
													variant='contained'>
													<DeleteIcon />
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							) : (
								<TableHead sx={{ th: { fontWeight: "bold" } }}>
									<TableRow>
										<TableCell align='left'>N/A</TableCell>
										<TableCell align='left'>N/A</TableCell>
										<TableCell align='left'>N/A</TableCell>
										<TableCell align='left'>N/A</TableCell>
										<TableCell align='left'>N/A</TableCell>
									</TableRow>
								</TableHead>
							)}
						</Table>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AllBooksList;
