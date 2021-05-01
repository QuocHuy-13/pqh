import React, {useState} from 'react';
import MobilLeftMenuSlider from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    List,
    Avatar,
    Divider,
    Typography,
    Box
} from "@material-ui/core";
import {
    Dehaze,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from "@material-ui/icons";
import avatar from "../Images/avatar.jpg";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const menuItems = [
    {
        listIcon : <Home/>,
        listText : "Home",
        listPath : "/"
    },
    {
        listIcon : <AssignmentInd/>,
        listText : "About Me",
        listPath : "/about"
    },
    {
        listIcon : <Apps/>,
        listText : "Portfolio",
        listPath : "/portfolio"
    },
    {
        listIcon : <ContactMail/>,
        listText : "ContactMail",
        listPath : "/contact"
    }
] 

const Navbar = () => {

    const  classes = useStyles();

    const [state, setstate] = useState({
        left : false
    });
    
    const toggleSlider = (slider, open) => () => {
        setstate({...state,[slider]:open})
    };

    const sideList = slider => (
        <Box className={classes.menuSlideContainer} component="div" onClick={toggleSlider("left",false)}>
            <Avatar className={classes.avatar} src={avatar}/>
            <Divider/>
            <List>
                {menuItems.map((listItem,index)  =>  (
                    <ListItem button key={index} component={Link} to={listItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{listItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={listItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background:'#222'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("left",true)}>
                        <Dehaze style={{color: "tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "tan"}}>
                        Portfolio
                    </Typography>
                    <MobilLeftMenuSlider 
                    anchor="left"
                    open={state.left}
                    onClose={toggleSlider("left",false)}>
                        {sideList("left")}
                    </MobilLeftMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
}

export default Navbar;

const useStyles = makeStyles(theme => ({
    menuSlideContainer:{
        width : 250,
        height : "100%",
        background : "#511",
    },
    avatar:{
        display: "block" ,
        margin : "0.5rem",
        width : theme.spacing(13),
        height : theme.spacing(13),
        marginLeft : "auto",
        marginRight : "auto"
    },
    listItem:{
        color : "tan"
    }
}));