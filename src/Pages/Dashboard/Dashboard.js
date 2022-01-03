import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";

const drawerWidth = 222;

function Dashboard(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const drawer = (
		<div>
			<List>
				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "#31887D",
					}}
					to='/dashboard'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center", color: "#31887D" }}>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary={"Profile"} />
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "#31887D",
					}}
					to='addbook'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center", color: "#31887D" }}>
							<MenuBookIcon />
						</ListItemIcon>
						<ListItemText primary={"Add New Book"} />
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "#31887D",
					}}
					to='allmails'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center", color: "#31887D" }}>
							<MenuBookIcon />
						</ListItemIcon>
						<ListItemText primary={"All Mills"} />
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "#31887D",
					}}
					to='allreviews'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center", color: "#31887D" }}>
							<MenuBookIcon />
						</ListItemIcon>
						<ListItemText primary={"All Reviews"} />
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "#31887D",
					}}
					to='allusers'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center", color: "#31887D" }}>
							<MenuBookIcon />
						</ListItemIcon>
						<ListItemText primary={"All Users"} />
					</ListItem>
				</Link>

				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "#31887D",
					}}
					to='/'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center", color: "#31887D" }}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItem>
				</Link>
				<ListItem button sx={{ color: "#31887D" }}>
					<ListItemIcon sx={{ justifyContent: "center", color: "#31887D" }}>
						<Logout />
					</ListItemIcon>
					<ListItemText primary={"LogOut"} />
				</ListItem>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					backgroundColor: "#31887D",
				}}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						DASHBOARD
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}>
				<Toolbar />
				<Outlet></Outlet>
			</Box>
		</Box>
	);
}

Dashboard.propTypes = {
	window: PropTypes.func,
};

export default Dashboard;
