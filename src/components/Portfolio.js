import Navbar from './Navbar';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from 'react';
import { Modal } from './Modal/Modal';
import PageviewIcon from '@material-ui/icons/Pageview';
import Carousel from 'react-material-ui-carousel';


function Portfolio() {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const [project, setProject] = useState({})
    const closeModalHandler = () => setShow(false);
    const Project = [
        {
            projectName: "Find Weather",
            projectDesc: "This is a small project that helps to view weather conditions by location, which is built using reactjs and uses OpenWeatherMap's weather API. ",
            projectImg: [
                "https://firebasestorage.googleapis.com/v0/b/farm2-20731.appspot.com/o/a3.png?alt=media&token=21d698aa-8b94-4865-9385-e2d2dc2433c7&fbclid=IwAR3KjqutaByu7GGwWBaXCxsdpH2sb0TJdEqS2x8qmyKS9rBWajPWBu-vuzg",
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/weather1.PNG?alt=media&token=9a1d7821-71f1-44a8-b23a-7600b3e2dcfe",
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/weather2.PNG?alt=media&token=d9b389e3-8f49-4512-abde-91a17de951af",
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/weather3.PNG?alt=media&token=5135fc77-915f-4557-98fa-ecd4eec7aa16"
            ],
            projectTech: [
                "ReactJS",
                "Aios",
                "Styled components"
            ],
            projectLink: "https://pqh-weather.herokuapp.com/"
        },
        {
            projectName: "Portfolio",
            projectDesc: "Portfolio is a project that aims to outline my basic information such as: Resume, skills and career goals ...",
            projectImg: [
                "https://firebasestorage.googleapis.com/v0/b/farm2-20731.appspot.com/o/a1.png?alt=media&token=fda2ce7d-fadb-4645-a7ce-bb0fadeedc57&fbclid=IwAR3cvfGzJVsdXrKWm_gnhonzs_xO9mo0B0z_gbYeuFLn3Vn7IfoVQ12layo",
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/portfolio1.PNG?alt=media&token=a38caeb3-ba84-46d2-81ee-cbcb5321e8d5",
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/portfolio3.PNG?alt=media&token=226113a8-f0f4-46f6-bd9b-e87ddf9326a4",
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/portfolio2.PNG?alt=media&token=9a7887e7-f050-412c-b8ff-4f4f419676d7"
            ],
            projectTech: [
                "ReactJS",
                "Material ui",
                "React Router",
                "Styled components"
            ],
            projectLink: "https://quochuy-13.github.io/pqh/"
        },
        {
            projectName: "Informatics Center",
            projectDesc: "This is a project I cover the website interface of the Natural Science Informatics Center.",
            projectImg: [
                "https://firebasestorage.googleapis.com/v0/b/farm2-20731.appspot.com/o/a2.png?alt=media&token=e87f4b2c-a708-4679-9401-8199d84b50c4&fbclid=IwAR2hJG-okGDC7bcmtmtrxYQua6Ls36yQI1xpsY4F704FApBXF61KQGoRFIA",
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/Daotao1.PNG?alt=media&token=f232dd0c-6eb6-4a5c-901f-d0760ab131aa",
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/Daotao2.PNG?alt=media&token=1e8a2d55-0059-42ad-949a-50e8daee3e5f",
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/Daotao3.PNG?alt=media&token=f9c1be96-e64c-48db-a0bf-cecbee4484fd"
            ],
            projectTech: [
                "HTML",
                "CSS",
                "Bootstrap"
            ],
            projectLink: "https://pqh-weather.herokuapp.com/"
        },
        {
            projectName: "City-Guide",
            projectDesc: "This is a demo project on City Guide that will include many elements such as information about famous places, people's reviews, a map that guides people to there ...",
            projectImg: [
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/CityGuide.PNG?alt=media&token=da09b420-6760-4b85-b0a3-acdc094e17fd",
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/CityGuide1.PNG?alt=media&token=e5332e06-5d1f-4c96-be50-ec252eebb6ce",
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/CityGuide2.PNG?alt=media&token=4c2b244e-01b1-421c-a18a-9425055221c8",
                "https://firebasestorage.googleapis.com/v0/b/loadimg-928ad.appspot.com/o/CityGuide3.PNG?alt=media&token=f5afaff3-cd5d-46eb-9c5b-33cd2c970fa5"
            ],
            projectTech: [
                "ReactJS",
                "React Router",
                "Bootstrap",
                "Styled components"
            ],
            projectLink: "https://city-guide-cover.herokuapp.com/"
        },
    ]
    return (
        <div>
            { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4">
                        Projects
                    </Typography>
                    <Typography variant="subtitle1">
                        my projects
                    </Typography>
                </Box>
                <Box component="div">
                    <Grid container direction="row" >
                        {Project.map((item, index) => {
                            return (
                                <Grid item md={6} xs={12} key={index} className={classes.project_item}>
                                    <Box component="div" className={classes.project_avt}>
                                        {/* <img src={item.projectImg[0]} alt="weather" className={classes.img} width="500" /> */}
                                        <Carousel>
                                            {item.projectImg.map((item1, index1) => (
                                                <div key={index1} className="modal-img">
                                                    <img src={item1} alt="weather" className={classes.img} width="500"></img>
                                                </div>
                                            ))}
                                        </Carousel>
                                        <Button
                                            onClick={() => {
                                                setShow(true)
                                                setProject(item)
                                            }}
                                            className={classes.button}
                                            startIcon={<PageviewIcon />}
                                        >View Project
                                        </Button>
                                    </Box>
                                    <Modal show={show} close={closeModalHandler} project={project} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Box>

        </div>
    );
}

export default Portfolio;

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#000"
    },
    title: {
        color: "tomato",
        textAlign: "center",
        paddingBottom: "40px"
    },
    project_avt: {
        width: "100%",
        position: "relative",
        "&:hover $img": {
            opacity: "0.3",
            border: "2px solid #ff6329",
        },
        "&:hover $button": {
            opacity: "1"
        },
    },
    img: {
        display: "block",
        width: "100%",
        height: "auto",
        opacity: "1",
        transition: ".5s ease",
        backfaceVisibility: "hidden"
    },
    button: {
        transition: ".5s ease",
        opacity: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "Translate(-50%, -50%)",
        textalign: "center",
        backgroundColor: '#000',
        color: 'tomato',
        '&:hover': {
            backgroundColor: '#333333',
            color: 'tan',
        },
    },
    project_item: {
        padding: "0px 20px 40px 20px"
    }
}));




