import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Box, IconButton, Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import EmailIcon from "@mui/icons-material/Email";

export default function NavbarMenu() {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const dropDown = [
		{ label: "Change Password", icon: <VpnKeyIcon /> },
		{ label: "logout", icon: <LogoutOutlinedIcon /> },
	];

	return (
		<Box>
			<IconButton aria-controls="" aria-haspopup="true" color="inherit">
				<Badge color="secondary" badgeContent={4}>
					<NotificationsIcon />
				</Badge>
			</IconButton>

			<IconButton aria-controls="" aria-haspopup="true" color="inherit">
				<EmailIcon />
			</IconButton>

			<IconButton //for settings
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
				color="inherit"
			>
				<SettingsIcon />
			</IconButton>

			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{dropDown.map((item, i) => (
					<MenuItem key={i} onClick={handleClose}>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText>{item.label}</ListItemText>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
}
