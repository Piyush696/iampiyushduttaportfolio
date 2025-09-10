import React from "react";
import { Container, Typography, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";


const Hero = () => {
    const useStyles = makeStyles((theme) => ({
        title: {
            fontSize: "3.8rem",
            lineHeight: "1.3em",
            textShadow: `1px 1px 2px ${theme.palette.text.primary}`,
        },
        subTitle: {
            marginTop: theme.spacing(2)
        },
        image: {
            marginTop: theme.spacing(3),
        },
    }));
    const classes = useStyles();

    const query = graphql`{
        allImageSharp(filter: {original: {src: {regex: "/rajesh-royal-vector-illustrator/"}}}) {
          edges {
            node {
              id
              fixed(width: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }`;
    const RajeshImage = useStaticQuery(query);
    return (
        <section className="Hero-section">
            <Container maxWidth="lg">
                <Box my={6}>
                    <Grid spacing={3} container>
                        <Grid component="div" item sm={12}>
                            <Typography variant="h4" color="textPrimary" align="center" className={classes.title}>
                                Hi there, 👋 My Name is Piyush Dutta. fullstack-Engineer from India😉.
                            </Typography>
                            <Typography variant="h6" color="textPrimary" align="center" className={classes.subTitle}>

                                I'm a passionate fullstack developer who loves turning ideas into elegant, scalable, and user-friendly web experiences. With a focus on clean code and modern technologies, I'm always eager to learn and improve.

                            </Typography>
                            <Typography align="center" color="textPrimary" className={classes.subTitle}>
                                I design and code beautifully simple things, and I love what I do.
                            </Typography>
                            <Typography align="center" className={classes.image} component="div">
                                <Img fixed={RajeshImage.allImageSharp.edges[0].node.fixed}
                                    alt="Piyush Dutta vector illustrator" />
                            </Typography>
                            <Link to="/contact" target="_blank">
                                <Typography variant="button" color="textPrimary" align="center" className={classes.button}>
                                    <Box mt={3}>
                                        <Button variant="contained" color="primary" size="large">
                                            Say Hello 👋
                                        </Button>
                                    </Box>
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section >
    );
};

export default Hero;