import { Box, Typography, Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { makeStyles } from "@material-ui/core/styles";
import hinh from '../Images/hinh.jpg';
import CheckIcon from '@material-ui/icons/Check';
import AOS from "aos";
import "aos/dist/aos.css";

const Programming_language = [
    'Javascript',
    'HTML,CSS',
    'C',
]

const Soft_Skill = [
    'Team Work',
    'Self Learning'
]

const Library = [
    'Reactjs',
    'React-Router',
    'Bootstrap',
    'Material ui',
    'Axios'
]

const version_control = [
    'Git'
]


const About = () => {
    const classes = useStyles();
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <div>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4">
                        About Me
                    </Typography>
                    <Typography variant="subtitle1">
                        who i am
                    </Typography>
                </Box>
                <Box component="div">
                    <Grid container direction="row">
                        <Grid item md={4} xs={12} style={{ paddingLeft: "50px" }}>
                            <Box component="div" className={classes.about_avt}>
                                <img src={hinh} alt='img' className={classes.img} width="500" />
                            </Box>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Box component="div" className={classes.div_dersp} style={{ paddingTop: "20px" }}>
                                <Typography style={{ fontSize: "25px" }}>
                                    Hello! My name is <strong style={{ color: "tomato" }}>Pham Quoc Huy</strong>
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    I am a final year degree in Embedded Systems at Industrial University of Ho Chi Minh City, I am passionate about building websites so I choose to study as a Font-End developer and will strive to become a Full-Stack developer in the future.
                                </Typography>
                            </Box>
                            <Box component="div" style={{ paddingLeft: "50px" }}>
                                <Grid container direction="row" >
                                    <Grid container item md={12} xs={12} style={{ paddingTop: "30px" }}>
                                        <Grid item md={6} xs={12} style={{ display: "flex", marginTop: "30px" }} >
                                            <Box component="div" className={classes.about_introduce_left}>
                                                Birthday:
                                            </Box>
                                            <Box component="div" className={classes.about_introduce_right}>
                                                13 Oct 1999
                                            </Box>
                                        </Grid>
                                        <Grid item md={6} xs={12} style={{ display: "flex", marginTop: "30px" }}>
                                            <Box component="div" className={classes.about_introduce_left}>
                                                Age:
                                            </Box>
                                            <Box component="div" className={classes.about_introduce_right}>
                                                22
                                            </Box>
                                        </Grid>
                                        <Grid item md={6} xs={12} style={{ display: "flex", marginTop: "30px" }}>
                                            <Box component="div" className={classes.about_introduce_left}>
                                                Address:
                                            </Box>
                                            <Box component="div" className={classes.about_introduce_right}>
                                                43 Vuon Lai Street, 12 district, Ho Chi Minh City
                                            </Box>
                                        </Grid>
                                        <Grid item md={6} xs={12} style={{ display: "flex", marginTop: "30px" }}>
                                            <Box component="div" className={classes.about_introduce_left}>
                                                Nationality:
                                            </Box>
                                            <Box component="div" className={classes.about_introduce_right}>
                                                Viet Nam
                                            </Box>
                                        </Grid>
                                        <Grid item md={6} xs={12} style={{ display: "flex", marginTop: "30px" }}>
                                            <Box component="div" className={classes.about_introduce_left}>
                                                Phone:
                                            </Box>
                                            <Box component="div" className={classes.about_introduce_right}>
                                                0777086748
                                            </Box>
                                        </Grid>
                                        <Grid item md={6} xs={12} style={{ display: "flex", marginTop: "30px" }}>
                                            <Box component="div" className={classes.about_introduce_left}>
                                                Email:
                                            </Box>
                                            <Box component="div" className={classes.about_introduce_right}>
                                                phamquochuy0509@gmail.com
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box component="div" className={classes.about_skill}>
                    <Typography variant="h4" className={classes.about_skill_title}>
                        My Skills
                    </Typography>
                </Box>
                <Box component='div' style={{ paddingLeft: "50px"}}>
                    <Grid container direction="row">
                        <Grid item md={4} xs={12} className={classes.about_skill_item} data-aos="zoom-in-down">
                            <Box component="div" className={classes.paper}>
                                <Typography variant="h6" className={classes.about_skill_title}>
                                    Programming language
                            </Typography>
                                <List>
                                    {Programming_language.map((list, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <CheckIcon style={{ color: "#ccc" }} />
                                            </ListItemIcon>
                                            <ListItemText>{list}</ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12} className={classes.about_skill_item} data-aos="zoom-in-down">
                            <Box component="div" className={classes.paper}>
                                <Typography variant="h6" className={classes.about_skill_title}>
                                    Library-Framework
                            </Typography>
                                <List>
                                    {Library.map((list, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <CheckIcon style={{ color: "#ccc" }} />
                                            </ListItemIcon>
                                            <ListItemText>{list}</ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12} className={classes.about_skill_item} data-aos="zoom-in-down">
                            <Box component="div" className={classes.paper}>
                                <Typography variant="h6" className={classes.about_skill_title}>
                                    Soft Skill
                                </Typography>
                                <List>
                                    {Soft_Skill.map((list, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <CheckIcon style={{ color: "#ccc" }} />
                                            </ListItemIcon>
                                            <ListItemText>{list}</ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography variant="h6" className={classes.about_skill_title}>
                                    version control
                                </Typography>
                                <List>
                                    {version_control.map((list, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <CheckIcon style={{ color: "#ccc" }} />
                                            </ListItemIcon>
                                            <ListItemText>{list}</ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    );
}

export default About;


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#000000"
    },
    title: {
        color: "tomato",
        textAlign: "center",
        paddingBottom: "40px"
    },
    about_avt: {
        width: "90%",
    },
    img: {
        display: "block",
        width: "100%",
        height: "auto",
        border: "2px solid #0000",
        borderRadius: "10px",
    },
    div_dersp: {
        padding: "0px 35px 0 50px",
        color: "#ccc",
        lineHeight: "1.5"
    },
    about_introduce_left: {
        color: "tomato",
        fontSize: "20px"
    },
    about_introduce_right: {
        color: "#ccc",
        marginLeft: "10px",
        marginTop: "5px",
        fontSize: "15px"
    },
    about_skill: {
        marginTop: "50px",
        marginBottom: "50px"
    },
    about_skill_title: {
        textAlign: "center",
        color: "#33FF66",
    },
    about_skill_item: {
        marginBottom: "50px",
        fontSize: "15px",
        backgroundColor: "#000000",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "#ccc",
        backgroundColor: "#1a1a1a",
        width: "90%",
        height: "100%"
    },
}));