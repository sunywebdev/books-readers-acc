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
import useAuth from "../../context/useAuth";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import EmailIcon from "@mui/icons-material/Email";
import ReviewsIcon from "@mui/icons-material/Reviews";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GroupIcon from "@mui/icons-material/Group";

const drawerWidth = 222;

function Dashboard(props) {
	const { logOut, admin } = useAuth();
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
						color: "#02598b",
					}}
					to='/dashboard'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center", color: "#02598b" }}>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary={"Profile"} />
					</ListItem>
				</Link>
				{admin && (
					<>
						<Link
							style={{
								textDecoration: "none",
								fontWeight: "bold",
								fontSize: "15px",
								color: "#02598b",
							}}
							to='addbook'>
							<ListItem button>
								<ListItemIcon
									sx={{ justifyContent: "center", color: "#02598b" }}>
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
								color: "#02598b",
							}}
							to='allbooks'>
							<ListItem button>
								<ListItemIcon
									sx={{ justifyContent: "center", color: "#02598b" }}>
									<LocalLibraryIcon />
								</ListItemIcon>
								<ListItemText primary={"All Books"} />
							</ListItem>
						</Link>
						<Link
							style={{
								textDecoration: "none",
								fontWeight: "bold",
								fontSize: "15px",
								color: "#02598b",
							}}
							to='allmails'>
							<ListItem button>
								<ListItemIcon
									sx={{ justifyContent: "center", color: "#02598b" }}>
									<EmailIcon />
								</ListItemIcon>
								<ListItemText primary={"All Mails"} />
							</ListItem>
						</Link>
						<Link
							style={{
								textDecoration: "none",
								fontWeight: "bold",
								fontSize: "15px",
								color: "#02598b",
							}}
							to='allreviews'>
							<ListItem button>
								<ListItemIcon
									sx={{ justifyContent: "center", color: "#02598b" }}>
									<ReviewsIcon />
								</ListItemIcon>
								<ListItemText primary={"All Reviews"} />
							</ListItem>
						</Link>
					</>
				)}
				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "#02598b",
					}}
					to='myreviews'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center", color: "#02598b" }}>
							<ReviewsIcon />
						</ListItemIcon>
						<ListItemText primary={"My Reviews"} />
					</ListItem>
				</Link>
				{admin && (
					<>
						<Link
							style={{
								textDecoration: "none",
								fontWeight: "bold",
								fontSize: "15px",
								color: "#02598b",
							}}
							to='userRoles'>
							<ListItem button>
								<ListItemIcon
									sx={{ justifyContent: "center", color: "#02598b" }}>
									<VerifiedUserIcon />
								</ListItemIcon>
								<ListItemText primary={"Page Roles"} />
							</ListItem>
						</Link>
						<Link
							style={{
								textDecoration: "none",
								fontWeight: "bold",
								fontSize: "15px",
								color: "#02598b",
							}}
							to='allusers'>
							<ListItem button>
								<ListItemIcon
									sx={{ justifyContent: "center", color: "#02598b" }}>
									<GroupIcon />
								</ListItemIcon>
								<ListItemText primary={"All Users"} />
							</ListItem>
						</Link>
					</>
				)}

				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "#02598b",
					}}
					to='/'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center", color: "#02598b" }}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItem>
				</Link>
				<ListItem onClick={logOut} button sx={{ color: "#02598b" }}>
					<ListItemIcon sx={{ justifyContent: "center", color: "#02598b" }}>
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
					backgroundColor: "#02598b",
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
							justifyContent: "center",
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
							justifyContent: "center",
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
