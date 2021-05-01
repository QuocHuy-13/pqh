import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Paper } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextField from '@material-ui/core/TextField';
import TelegramIcon from '@material-ui/icons/Telegram';
import AOS from "aos";
import "aos/dist/aos.css";
import Button from '@material-ui/core/Button';

const Contact = () => {
    const classes = useStyles();
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <div>
            <Navbar />
            <Box component='div' className={classes.mainContainer}>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4">
                        Contact Me
                    </Typography>
                    <Typography variant="subtitle1">
                        Get in touch
                    </Typography>
                </Box>
                <Box component="div" className={classes.subtitle}>
                    <Typography variant="subtitle1">
                        Please don't hesitate to contact me, if you want to discuss more about the work. I am very happy about that.
                    </Typography>
                </Box>
                <Paper className={classes.Paper}>
                    <Grid container direction="row">
                        <Grid item md={4} xs={12} className={classes.contact_item} data-aos="zoom-in-down">
                            <Box component="div" className={classes.div}>
                                <PhoneIcon style={{ color: "tomato" }} />
                                <Typography style={{ paddingTop: "10px", paddingBottom: "15px", fontSize: "20px" }}><strong>Phone</strong></Typography>
                                <Typography>0777086748</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12} className={classes.contact_item} data-aos="zoom-in-down">
                            <Box component="div" className={classes.div}>
                                <EmailIcon style={{ color: "tomato" }} />
                                <Typography style={{ paddingTop: "10px", paddingBottom: "15px", fontSize: "20px" }}><strong>Email</strong></Typography>
                                <Typography>phamquochuy0509@gmail.com</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12} className={classes.contact_item} data-aos="zoom-in-down">
                            <Box component="div" className={classes.div}>
                                <LocationOnIcon style={{ color: "tomato" }} />
                                <Typography style={{ paddingTop: "10px", paddingBottom: "15px", fontSize: "20px" }}><strong>Address</strong></Typography>
                                <Typography>43 Vuon Lai Street, 12 district, Ho Chi Minh City</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
                <Grid container direction="row" style={{paddingLeft:"50px"}}>
                    <Grid item md={6} xs={12}>
                        <form className={classes.root} >
                                <TextField label="Name" type="Name" fullWidth variant="outlined"
                                    InputLabelProps={{
                                        style: { color: '#FFFFFF' },
                                    }}
                                    InputProps={{
                                        className: classes.input
                                    }}
                                />
                                <TextField label="Email" type="email" fullWidth variant="outlined"
                                    InputLabelProps={{
                                        style: { color: '#FFFFFF' },
                                    }}
                                    InputProps={{
                                        className: classes.input
                                    }}
                                />
                                <TextField label="Phone Number" type="email" fullWidth variant="outlined"
                                    InputLabelProps={{
                                        style: { color: '#FFFFFF' },
                                    }}
                                    InputProps={{
                                        className: classes.input
                                    }}
                                />
                                <TextField
                                    label="Subject"
                                    type="subject"
                                    fullWidth
                                    variant="outlined"
                                    InputLabelProps={{
                                        style: { color: '#FFFFFF' },
                                    }}
                                    InputProps={{
                                        className: classes.input
                                    }}
                                />
                        </form>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <form className={classes.root} >
                            <TextField
                                InputProps={{
                                    className: classes.input
                                }}
                                label="Message"
                                type="text"
                                multiline
                                rows={13}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: '#FFFFFF' },
                                }}
                            />
                        </form>
                    </Grid>
                </Grid>
                <Box component='div' style={{ paddingBottom: "18px" }}>
                    <Button className={classes.button}><TelegramIcon /> Send</Button>
                </Box>
            </Box>
        </div>
    );
}
export default Contact;

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#000000",
        height: "100%",
        width: "100%"
    },
    title: {
        color: "tomato",
        textAlign: "center",
        paddingBottom: "30px"
    },
    subtitle: {
        color: "#ffff",
        textAlign: "center",
        paddingBottom: "50px"
    },
    contact_item: {
        paddingBottom: "25px",
        fontSize: "15px",
        backgroundColor: "#000000"
    },
    div: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "#ccc",
        backgroundColor: "#1a1a1a",
        width: "90%",
        height: "100%"
    },
    input: {
        color: "white",
    },
    root: {
        "& .MuiFormControl-root": {
            width: "93%",
            marginBottom: theme.spacing(1),
            marginTop: theme.spacing(1),
            backgroundColor: "#1a1a1a",
        }
    },
    Paper: {
        paddingLeft: "50px",
        backgroundColor: "#000",
        marginBottom: "30px"
    },
    div_input_right: {
        backgroundColor: "#1a1a1a",
        margin: "8px",
        marginRight: "50px",
        marginLeft: "50px",
    },
    button: {
        marginLeft: "50px",
        border: "2px solid #0000",
        borderRadius: "10px",
        backgroundColor: "#1a1a1a",
        color: "#FFFFFF",
        "&:hover": {
            cursor: "pointer",
            color: "#0066CC",
            backgroundColor: "#FFFFFF"
        }
    },

}));