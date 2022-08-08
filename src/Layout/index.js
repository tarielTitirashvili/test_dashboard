import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import { Button, IconButton } from "@mui/material";
import Logo from "../utils/images/Logo.png";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NavElements from "../components/navElem";
import {
  CustomizedAppBar,
  CustomizedDrawer,
  CustomizedDrawerHeader,
} from "../ui/appBar";

export default function MainLayout() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomizedAppBar color="secondary" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, marginRight: "30px" }}>
            <img style={{ height: "50px" }} src={Logo} alt="logo" />
          </Box>
          <Button variant="outlined" color="error">
            გასვლა
          </Button>
        </Toolbar>
      </CustomizedAppBar>
      <CustomizedDrawer variant="permanent" open={open}>
        <CustomizedDrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </CustomizedDrawerHeader>
        <Divider />
        <List>
          <NavElements routes={routes} />
        </List>
        <Divider />
      </CustomizedDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <CustomizedDrawerHeader />
        <Routes>
          {routes.map((route) => {
            const result = [];
            if (route.children) {
              result.push(
                ...route.children.map((child) => (
                  <Route
                    key={child.path}
                    path={`${route.path}${child.path}`}
                    element={child.component}
                  />
                ))
              );
            }
            result.push(
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            );
            return result;
          })}
          <Route path="*" element={<Navigate replace to="/error404" />} />
        </Routes>
      </Box>
    </Box>
  );
}
