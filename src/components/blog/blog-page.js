import React from "react";
import { Link } from "gatsby";
import {
    Typography,
    Container,
    Box,
    Grid,
    Divider,
    makeStyles,
    Card,
    CardActions,
    CardContent,
    CardActionArea,
    CardMedia,
    Chip
} from "@material-ui/core";

const BlogPage = ({ posts, loading }) => {
    const useStyles = makeStyles((theme) => ({
        divider: {
            maxWidth: "150px",
            margin: "1rem auto"
        },
        card: {
            background: theme.palette.secondary.main,
            "& a": {
                textDecoration: "none",
            }
        },
        chip: {
            background: theme.palette.secondary.main,
            "& .MuiChip-root": {
                background: theme.palette.secondary.dark,
                color: theme.palette.text.primary,
                cursor: "pointer",
                "&:hover": {
                    filter: "brightness(130%)"
                }
            }
        }
    }));

    const classes = useStyles();

    if (loading) {
        return <Typography variant="h6" align="center">Loading posts...</Typography>;
    }

    return (
        <section className="blog-section">
            <Container maxWidth="lg">
                <Box mt={8}>
                    <Grid spacing={3} container>
                        <Grid component="div" item sm={12}>
                            <Typography variant="h4" color="textPrimary" align="center">
                                Blog
                            </Typography>
                            <Divider variant="middle" className={classes.divider} />
                        </Grid>
                    </Grid>
                </Box>

                <Box my={4}>
                    <Grid spacing={3} container>
                        {posts.map((post, index) => (
                            <Grid item xs={12} sm={6} lg={4} key={index}>
                                <Card className={classes.card}>
                                    <Link to={`/blog/${post.slug}`}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="180"
                                                image={post.featured_media.localFile.childImageSharp.fixed.src}
                                                alt={post.title}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="h4"
                                                    color="textPrimary"
                                                >
                                                    {post.title.length > 55 ? post.title.slice(0, 55) + "..." : post.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textPrimary"
                                                    component="p"
                                                >
                                                    {post.excerpt.length > 140 ? post.excerpt.slice(0, 140) + "..." : post.excerpt}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>

                                    <CardActions className={classes.chip}>
                                        {post.categories.map((cat, i) => (
                                            <Link to={`/category/${cat.slug}`} key={i}>
                                                <Chip size="medium" label={cat.name} />
                                            </Link>
                                        ))}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default BlogPage;
