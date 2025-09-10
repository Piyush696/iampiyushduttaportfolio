import React from "react";
import { Container, Typography, Box, Avatar, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import parse from "html-react-parser";

const useStyles = makeStyles((theme) => ({
    featured: {
        width: "100%",
        maxHeight: 400,
        objectFit: "cover",
        marginBottom: theme.spacing(3),
    },
    title: {
        marginTop: theme.spacing(2),
    },
    date: {
        marginBottom: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    avatar: {
        width: 30,
        height: 30,
        marginRight: theme.spacing(1),
    },
    body: {
        "& p, h4, ul": {
            fontSize: 18,
            lineHeight: 1.6,
        },
        "& a": {
            color: theme.palette.info.main,
            textDecoration: "none",
        },
        "& img": {
            maxWidth: "100%",
            height: "auto",
        },
        marginTop: theme.spacing(3),
    },
    categories: {
        marginTop: theme.spacing(2),
        "& > *": {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    },
}));

const SingleBlog = ({ post }) => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <img
                    src={post.featured_media.localFile.childImageSharp.fluid.src}
                    alt={post.title}
                    className={classes.featured}
                />
                <Typography variant="h3" component="h1" className={classes.title}>
                    {post.title}
                </Typography>
                <Box display="flex" alignItems="center" className={classes.date}>
                    <Avatar
                        src={post.author.avatar_urls.wordpress_24}
                        alt={post.author.name}
                        className={classes.avatar}
                    />
                    <Typography variant="body2">
                        {post.author.name} | {post.date}
                    </Typography>
                </Box>
                <Typography variant="body1" className={classes.body} component="div">
                    {parse(post.content)}
                </Typography>
                <Box className={classes.categories}>
                    {post.categories.map((cat, i) => (
                        <Chip key={i} label={cat.name} clickable />
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default SingleBlog;
