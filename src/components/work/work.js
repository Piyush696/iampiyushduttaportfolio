import React from "react";
import { Typography, Container, Box, Grid, Card, CardActionArea, CardMedia, CardContent, Chip, makeStyles } from "@material-ui/core";
import Img from "gatsby-image"; // You can remove this if using normal <img>

const Work = () => {
    const useStyles = makeStyles((theme) => ({
        divider: {
            maxWidth: "150px",
            margin: "1rem auto",
        },
        subtitle: {
            marginTop: theme.spacing(2),
        },
        card: {
            background: theme.palette.secondary.main,
            transition: "all 0.5s",
            position: "relative",
            "&:hover .project-content": {
                opacity: 1,
                transform: "scale(1)",
            },
        },
        cardContent: {
            opacity: 0,
            transform: "scale(0.9)",
            transformOrigin: "left center",
            transition: "all 0.3s",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background: "rgba(0,0,0,0.8)",
            color: "#fff",
            padding: theme.spacing(2),
            "& p": {
                fontSize: "0.9rem",
                lineHeight: 1.8,
            },
        },
        upworkButton: {
            color: theme.palette.text.primary,
            textDecoration: "none",
            opacity: 0.8,
            "&:hover": {
                fontSize: "1rem",
            },
        },
    }));
    const classes = useStyles();

    // Hardcoded project data
    const projects = [
        {
            title: "Portfolio Website",
            excerpt: "A modern portfolio website built with Gatsby and Material-UI.",
            slug: "https://example.com/project1",
            thumbnail: "/projects/project1.jpg",
            categories: ["Web Development", "React"],
        },
        {
            title: "E-commerce Store",
            excerpt: "An online store with cart, checkout, and admin panel.",
            slug: "https://example.com/project2",
            thumbnail: "/projects/project2.jpg",
            categories: ["React", "Node.js"],
        },
        {
            title: "Blog Platform",
            excerpt: "Custom blog platform with CMS and SEO optimization.",
            slug: "https://example.com/project3",
            thumbnail: "/projects/project3.jpg",
            categories: ["Gatsby", "GraphQL"],
        },
    ];

    return (
        <section className="blog-section">
            <Container maxWidth="lg">
                <Box mt={12} mb={4} textAlign="center">
                    <Typography variant="h4">My Recent Work</Typography>
                    <Typography variant="body2" className={classes.subtitle}>
                        Here are a few Development projects I've worked on recently.
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} lg={4} key={index}>
                            <Card className={classes.card}>
                                <a href={project.slug} target="_blank" rel="noreferrer">
                                    <CardActionArea>
                                        <CardMedia component="img" height="180" image={project.thumbnail} alt={project.title} />
                                        <CardContent className={`${classes.cardContent} project-content`}>
                                            <Typography variant="h5">{project.title}</Typography>
                                            <Typography variant="body2">{project.excerpt}</Typography>
                                            <Box mt={1}>
                                                {project.categories.map((cat, i) => (
                                                    <Chip key={i} label={cat} size="small" style={{ marginRight: 4, background: "#444", color: "#fff" }} />
                                                ))}
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </a>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5} textAlign="center">
                    <a href="https://www.upwork.com/freelancers/~01e16cc076dd7d6559" target="_blank" rel="noreferrer" className={classes.upworkButton}>
                        View more on Upwork
                    </a>
                </Box>
            </Container>
        </section>
    );
};

export default Work;
