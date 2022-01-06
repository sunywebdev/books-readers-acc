import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";

const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const { user, logOut } = useAuth();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar
					sx={{
						backgroundColor: "#333333",
					}}>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Books Readers Associations
					</Typography>

					{!user?.email ? (
						<Link
							to='/login'
							style={{ textDecoration: "none", color: "white" }}>
							<Button color='inherit'>Login</Button>
						</Link>
					) : (
						<IconButton onClick={handleClick} sx={{ pl: 1 }}>
							<Avatar
								alt=''
								sx={{ border: "2px solid white" }}
								src={user?.photoURL}
							/>
						</IconButton>
					)}
					<Menu
						id='basic-menu'
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
						sx={{
							"& .MuiMenuItem-root,.MuiMenuItem-root a": {
								color: "#02598b",
							},
						}}>
						<MenuItem onClick={handleClose}>
							<Link to='/' style={{ textDecoration: "none" }}>
								Home
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/dashboard' style={{ textDecoration: "none" }}>
								Dashboard
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/allbooks' style={{ textDecoration: "none" }}>
								All Books
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/aboutus' style={{ textDecoration: "none" }}>
								About
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/contactus' style={{ textDecoration: "none" }}>
								Contact
							</Link>
						</MenuItem>
						<MenuItem onClick={logOut}>LogOut</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
