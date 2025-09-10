import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

const TestimonialSlider = () => {
    const useStyles = makeStyles((theme) => ({
        container: {
            width: "100%",
            textAlign: "center",
            padding: theme.spacing(4, 2),
        },
        carouselContainer: {
            width: "100%",
            height: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        },
        image: {
            borderRadius: "50%",
            border: "2px solid #eee",
            width: 100,
            height: 100,
            objectFit: "cover",
        },
        review: {
            fontWeight: 300,
            fontSize: 18,
            maxWidth: 800,
            lineHeight: 1.8,
            margin: "20px auto 10px",
        },
        name: {
            fontSize: 20,
            fontWeight: 500,
            marginBottom: 4,
        },
        title: {
            fontSize: 16,
            fontWeight: 300,
            color: theme.palette.info.main,
        },
    }));
    const classes = useStyles();

    // Hardcoded testimonials
    const testimonials = [
        {
            name: "John Doe",
            title: "Frontend Developer",
            review:
                "This developer did an amazing job building our website. Highly recommended!",
            avatar: "/avatars/john.jpg", // use a local image in /static or public folder
        },
        {
            name: "Jane Smith",
            title: "Project Manager",
            review:
                "Professional, fast, and skilled. Delivered everything on time with great quality.",
            avatar: "/avatars/jane.jpg",
        },
        {
            name: "Michael Johnson",
            title: "CEO, TechCorp",
            review:
                "Outstanding work! The project exceeded our expectations and was done efficiently.",
            avatar: "/avatars/michael.jpg",
        },
    ];

    return (
        <Carousel
            animation="slide"
            interval={5000}
            className={classes.carouselContainer}
            navButtonsAlwaysVisible={true}
        >
            {testimonials.map((item, index) => (
                <div className={classes.container} key={index}>
                    {item.avatar && <img src={item.avatar} alt={item.name} className={classes.image} />}
                    <Typography className={classes.review}>{item.review}</Typography>
                    <Typography className={classes.name}>{item.name}</Typography>
                    <Typography className={classes.title}>{item.title}</Typography>
                </div>
            ))}
        </Carousel>
    );
};

export default TestimonialSlider;
