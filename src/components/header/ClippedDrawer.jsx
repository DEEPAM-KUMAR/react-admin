import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NavbarMenu from "./Navtabs/NavbarMenu";
import { makeStyles } from "@material-ui/core/styles";
import StickyHeadTable from "../body/StickyHeadTable";
import { string } from "prop-types";
import { Button } from "@mui/material";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	toolbar: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "space-between",
	},
}));

export default function ClippedDrawer() {
	const classes = useStyles();

	const [state1, setState1] = useState(<h1>hi there</h1>);

	function handleClick1() {
		setState1(<StickyHeadTable />);
	}
	function handleClick2() {
		setState1(<h1>yaha table2</h1>);
	}
	function handleClick3() {
		setState1(<h1>yaha table 3</h1>);
	}
	function handleClick4() {
		setState1(<h1>yaha table4</h1>);
	}

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" noWrap component="div">
						Admin Panel
					</Typography>
					<Box>
						<NavbarMenu />
					</Box>
				</Toolbar>
			</AppBar>
			//Navbar upper portion
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
					},
					marginTop: "60px",
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<List>
						{/* {["Upcoming", "Upcoming & Assigned", "Completed", "Cancelled"].map(
							(text, index) => (
								<ListItem key={text} button name={text} onClick={handleClick}>
									<ListItemIcon>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							)
						)} */}
						<ListItem key="Upcoming" button onClick={handleClick1}>
							<ListItemIcon>
								<MailIcon />
							</ListItemIcon>
							<ListItemText primary="Upcoming" />
						</ListItem>
						<ListItem key="Upcoming & Assigned" button onClick={handleClick2}>
							<ListItemIcon>
								<MailIcon />
							</ListItemIcon>
							<ListItemText primary="Upcoming & Assigned" />
						</ListItem>
						<ListItem key="Completed" button onClick={handleClick3}>
							<ListItemIcon>
								<MailIcon />
							</ListItemIcon>
							<ListItemText primary="Completes" />
						</ListItem>
						<ListItem key="Cancelled" button onClick={handleClick4}>
							<ListItemIcon>
								<MailIcon />
							</ListItemIcon>
							<ListItemText primary="Cancelled" />
						</ListItem>
					</List>
					<Divider />
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{state1}
			</Box>
		</Box>
	);
}
