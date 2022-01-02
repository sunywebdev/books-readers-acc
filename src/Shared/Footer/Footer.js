import {
	Container,
	Divider,
	Grid,
	List,
	ListItemButton,
	ListItemText,
	Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
	return (
		<>
			<Divider />
			<Container sx={{ pt: 3 }}>
				<Grid container spacing={2}>
					<Grid item md={3} xs={6} sx={{ textAlign: "left" }}>
						<Typography
							variant='h6'
							gutterBottom
							component='div'
							sx={{ pl: 2, fontWeight: "bold" }}>
							Open Library
						</Typography>
						<List>
							<ListItemButton>
								<ListItemText primary='Vision' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Volunteer' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Partner With Us' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Careers' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Blog' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Terms of Service' />
							</ListItemButton>
						</List>
					</Grid>
					<Grid item md={3} xs={6} sx={{ textAlign: "left" }}>
						<Typography
							variant='h6'
							gutterBottom
							component='div'
							sx={{ pl: 2, fontWeight: "bold" }}>
							Discover
						</Typography>
						<List>
							<ListItemButton>
								<ListItemText primary='Home' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Books' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Authors' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Subjects' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Cellections' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Advanced Search' />
							</ListItemButton>
						</List>
					</Grid>
					<Grid item md={3} xs={6} sx={{ textAlign: "left" }}>
						<Typography
							variant='h6'
							gutterBottom
							component='div'
							sx={{ pl: 2, fontWeight: "bold" }}>
							Develop
						</Typography>
						<List>
							<ListItemButton>
								<ListItemText primary='Developer Center' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='API Documentation' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Bulk Data Dumps' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Writing Bots' />
							</ListItemButton>
						</List>
					</Grid>
					<Grid item md={3} xs={6} sx={{ textAlign: "left" }}>
						<Typography
							variant='h6'
							gutterBottom
							component='div'
							sx={{ pl: 2, fontWeight: "bold" }}>
							Help
						</Typography>
						<List>
							<ListItemButton>
								<ListItemText primary='Help Center' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Report A Problem' />
							</ListItemButton>
							<ListItemButton>
								<ListItemText primary='Suggesting Edits' />
							</ListItemButton>
						</List>
					</Grid>
				</Grid>
			</Container>
			<Divider />
			<Typography
				variant='subtitle'
				gutterBottom
				component='div'
				sx={{ textAlign: "center", py: 2 }}>
				&copy; All Rights Reserved By BBRA
			</Typography>
		</>
	);
};

export default Footer;
