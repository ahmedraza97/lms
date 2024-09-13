import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { PagesData } from "../data/PagesData";
import CustomAccor from "./CustomAccor";
import { Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../configue/FirebaseConfigue";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

export default function Layout() {
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth);
    localStorage.clear();
    navigate("/");
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let [openDrwer, setOpenDrwer] = React.useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `100% `,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#FF9800",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Learning Management Systems
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setOpenDrwer((prev) => !prev)}
            >
              <MenuIcon />
            </Typography>
            <Typography onClick={logOut} sx={{ cursor: "pointer" }}>
              Logout
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          padding: 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            left: { xs: `${openDrwer ? "0" : "-500px"}`, md: "0" },
          },
          position: { xs: "fixed", md: "relative" },
          zIndex: 1000,
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List sx={{ padding: 0 }}>
          {PagesData.map((val, index) => (
            <ListItem sx={{ padding: 0 }} key={val.pageLabel}>
              <ListItemButton sx={{ padding: 0 }}>
                <CustomAccor
                  data={val}
                  expanded={expanded}
                  handleChange={handleChange}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 2,
          overflow: "hidden",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
