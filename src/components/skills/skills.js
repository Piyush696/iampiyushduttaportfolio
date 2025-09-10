import * as React from "react";
import { Typography, Container, Box, Grid, Divider, makeStyles, Card, CardActions, Chip } from "@material-ui/core";

const Skills = () => {
    const useStyles = makeStyles((theme) => ({
        divider: {
            maxWidth: "150px",
            margin: "1rem auto",
        },
        card: {
            background: theme.palette.secondary.main,
            padding: theme.spacing(1),
            height: "100%",
            "& a": {
                textDecoration: "none",
            },
        },
        label: {
            paddingLeft: theme.spacing(1),
            opacity: 0.6,
        },
        chip: {
            background: theme.palette.secondary.main,
            flexWrap: "wrap",
            "& .MuiChip-root": {
                background: theme.palette.secondary.dark,
                color: theme.palette.text.primary,
                marginTop: theme.spacing(1),
                marginRight: theme.spacing(1),
            },
        },
    }));
    const classes = useStyles();

    // Hardcoded skills data
    const skillsData = [
        {
            name: "Programming Languages",
            skills: ["JavaScript", "TypeScript", "Python", "Java"],
        },
        {
            name: "Frontend",
            skills: ["React", "Angular", "Gatsby", "Next.js", "Material-UI"],
        },
        {
            name: "Backend & Databases",
            skills: ["Node.js", "Express", "MongoDB", "MySQL", "GraphQL"],
        },
        {
            name: "DevOps & Tools",
            skills: ["Docker", "Git", "GitHub", "CI/CD", "AWS"],
        },
        {
            name: "Other Skills",
            skills: ["SEO", "UI/UX Design", "Agile", "TDD", "REST APIs"],
        },
    ];

    return (
        <section className="blog-section">
            <Container maxWidth="lg">
                <Box mt={12}>
                    <Grid spacing={3} container>
                        <Grid component="div" item sm={12}>
                            <Typography variant="h4" color="textPrimary" align="center">
                                Skills
                            </Typography>
                            <Divider variant="middle" className={classes.divider} />
                        </Grid>
                    </Grid>
                </Box>

                <Box my={4}>
                    <Grid spacing={3} container>
                        {skillsData.map((node, index) => (
                            <Grid item xs={12} sm={6} lg={4} key={index}>
                                <Card className={classes.card}>
                                    <Typography variant="h6" color="inherit" component="p" className={classes.label}>
                                        {node.name}:
                                    </Typography>
                                    <CardActions className={classes.chip}>
                                        {node.skills.map((item, idx) => (
                                            <Chip label={item} key={idx} />
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

export default Skills;
