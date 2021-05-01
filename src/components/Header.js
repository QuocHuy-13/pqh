import React from 'react';
import {Typography,Avatar,Grid,Box,IconButton} from "@material-ui/core"
import avatar from "../Images/avatar.jpg";
import Typed from 'react-typed';
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="QUOC HUY" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed
                    strings={['This is my portfolio']}
                    typeSpeed={80}
                />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed
                    strings={['I\'m Phạm Quốc Huy', 'I live in HCM City', 'I love design website']}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
            </Typography>
            <IconButton href="https://www.facebook.com/quochuy.1310/">
                <FacebookIcon className={classes.icon} />
            </IconButton>
            <IconButton href="https://www.instagram.com/pq.hyu/">
                <InstagramIcon className={classes.icon} />
            </IconButton>
            <IconButton href="https://mail.google.com/mail/u/0/#inbox">
                <EmailIcon className={classes.icon} />
            </IconButton>
        </Box>
    );
}

export default Header;

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "#CC3300",
    },
    subtitle: {
        color: "#993300",
        marginBottom: "2rem"
    },
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        textAlign: 'center',
        zInde: 1,
        transform: "translate(-50%, -50%)",
        width: "90vw"
    },
    icon: {
        marginRight: "20px",
        "&:hover": {
            cursor: "pointer",
            color: "#0066CC",
            transform: "scale(1.5)",
            transition: "all ease-in-out 0.5s"
        }
    }
}));