import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import DrawerComp from "./Drawer";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "../App.module.css"
import { normalizeUnits } from "moment";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <CoronavirusIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Covid-19 Tracker
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "left" }}
                indicatorColor="primary"
                textColor="white"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" href="/" />

                <Tab label="Covid-19 Info" href="covidinfo" />

                <Tab label="Contact Us" href="contact" />
                
              </Tabs>
              
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                <Link
                  to="/signin"
                  className={classNames.Link}
                  style={{ textDecoration: "none" , color:"white"}}
                >
                  SignIn
                 
                </Link>
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                <Link
                  to="/signup"
                  className={classNames.Link}
                  style={{ textDecoration: "none" , color:"white"}}
                >
                  SignUp
                  
                </Link>
              </Button>
              {/* <Button sx={{ marginLeft: "10px" }} variant="contained">
                <Link
                  to="/download"
                  className={classNames.Link}
                  style={{ textDecoration: "none" , color:"white"}}
                >
                  Charts
                  
                </Link>
              </Button> */}
              
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;

// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Avatar from "@mui/material/Avatar";
// import { Container } from "@mui/system";
// import CoronavirusIcon from "@mui/icons-material/Coronavirus";
// import PersonIcon from "@mui/icons-material/Person";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import CallIcon from "@mui/icons-material/Call";
// import HelpIcon from "@mui/icons-material/Help";
// import LogoutIcon from "@mui/icons-material/Logout";
// import SignIn from "./SignIn";
// import Link from '@mui/material/Link';
// const drawerWidth = 240;

// const styles = {
//   paperContainer: {
//     backgroundImage: `url(${Image})`,
//   },
// };
// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

// export default function PersistentDrawerLeft() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <Box>
//             <IconButton
//               lg={1}
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleDrawerOpen}
//               edge="start"
//               sx={{ mr: 2, ...(open && { display: "none" }) }}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>

//           <Typography variant="h5" noWrap component="div">
//           <b> COVID-19 TRACKER</b>
//             <CoronavirusIcon fontSize="large" />
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "ltr" ? (
//               <ChevronLeftIcon />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <Container>
//           {" "}
//           <Avatar src="/broken-image.jpg" />
//         </Container>
//         <Divider />
//         <List>
//           {["My Profile",  "Contact US", "Covid-19 Info"].map(
//             (text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {index == 0 ? (
//                       <PersonIcon />
//                     ) : index == 1 ? (
//                       <ManageAccountsIcon />
//                     ) : index == 2 ? (
//                       <CallIcon />
//                     ) : (
//                       <HelpIcon />
//                     )}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             )
//           )}
//         </List>
//         <Divider />
//         <List>
//           {[""].map((text) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>{<LogoutIcon />}</ListItemIcon>
//                 <Link href="/signin">Sign In</Link>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />
//       </Main>
//     </Box>
//   );
// }
