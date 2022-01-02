import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Books Readers Associations BD
					</Typography>
					<Link to='/' style={{ textDecoration: "none", color: "white" }}>
						<Button color='inherit'>Home</Button>
					</Link>
					<Link
						to='/dashboard'
						style={{ textDecoration: "none", color: "white" }}>
						<Button color='inherit'>Dashboard</Button>
					</Link>
					<Link
						to='/allbooks'
						style={{ textDecoration: "none", color: "white" }}>
						<Button color='inherit'>All Books</Button>
					</Link>
					<Link
						to='/aboutus'
						style={{ textDecoration: "none", color: "white" }}>
						<Button color='inherit'>About</Button>
					</Link>
					<Link
						to='/contactus'
						style={{ textDecoration: "none", color: "white" }}>
						<Button color='inherit'>Contact</Button>
					</Link>

					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
