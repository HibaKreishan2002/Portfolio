import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    height: "55px",
    overflow: "hidden",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "whitesmoke",
      "&:hover": {
        fill: "#FFC0CB",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Facebook />} className={classes.root} href="https://www.facebook.com/profile.php?id=100009405116318" target="_blank" />
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} href="https://www.linkedin.com/in/hiba-kreishan-8480882a1/"  target="_blank" />
      <BottomNavigationAction icon={<Instagram />} className={classes.root} href=" https://www.instagram.com/_hibakreishan_/?next=%2F"  target="_blank" /> 
     
    </BottomNavigation>
  );
};
export default Footer;
