// import * as React from "react";
// import { Link } from "gatsby";
// import Img from "gatsby-image";
// import {
//     Typography, Container, Box, Grid, Divider,
//     makeStyles, Card, CardActions, CardContent,
//     CardActionArea, CardMedia, Chip
// } from "@material-ui/core";

// const BlogPage = ({ posts: postData, loading }) => {

//     const useStyles = makeStyles((theme) => ({
//         divider: {
//             maxWidth: "150px",
//             margin: "1rem auto"
//         },
//         card: {
//             background: theme.palette.secondary.main,
//             "& a": {
//                 textDecoration: "none",
//             },
//             "& .gatsby-image-wrapper": {
//                 width: "100% !important"
//             }
//         },
//         chip: {
//             background: theme.palette.secondary.main,

//             "& .MuiChip-root": {
//                 background: theme.palette.secondary.dark,
//                 color: theme.palette.text.primary,
//                 cursor: "pointer",
//                 "&:hover": {
//                     filter: "brightness(130%)"
//                 }
//             }
//         }
//     }));
//     const classes = useStyles();
//     return (
//         < section className="blog-section">
//             <Container maxWidth="lg">
//                 <Box mt={8}>
//                     <Grid spacing={3} container>
//                         <Grid component="div" item sm={12}>
//                             <Typography variant="h4" color="textPrimary" align="center">
//                                 Blog
//                                 </Typography>
//                             <Divider variant="middle" className={classes.divider} />
//                         </Grid>
//                     </Grid>
//                 </Box>
//                 {/* ToDo: Use wordpress api to fetch blog dynamically */}
//                 <Box my={4}>
//                     <Grid spacing={3} container>
//                         {postData.map(({ node }, index) => (
//                             <Grid item xs={12} sm={6} lg={4} key={index}>
//                                 <Card className={classes.card}>
//                                     <Link to={`/${node.slug}`}>
//                                         <CardActionArea bgcolor="primary">
//                                             <CardMedia
//                                                 component="div"
//                                                 height="180"
//                                             >
//                                                 <Img fixed={node.featured_media.localFile.childImageSharp.fixed}
//                                                     alt="blog post thumbnail image" />
//                                             </CardMedia>
//                                             <CardContent>
//                                                 <Typography gutterBottom variant="h5" component="h4" color="textPrimary"
//                                                     dangerouslySetInnerHTML={{ __html: node.title.slice(0, 55) + "..." }} />
//                                                 <Typography variant="body2" color="textPrimary" component="p"
//                                                     dangerouslySetInnerHTML={{ __html: node.excerpt.slice(0, 140) }} />
//                                             </CardContent>
//                                         </CardActionArea>
//                                     </Link>
//                                     <CardActions className={classes.chip}>
//                                         {
//                                             node.categories.map((item, index) => {
//                                                 return <Link to={`/${item.slug}`} key={index}><Chip size="medium" label={item.name} /></Link>;
//                                             })
//                                         }

//                                     </CardActions>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Box>
//             </Container>
//         </section>
//     );
// };


// // export const query = graphql`
// // query BlogPageQuery2 {
// //     allWordpressPost{
// //         edges {
// //         node {
// //             title
// //             excerpt
// //             x_featured_media_medium
// //             date
// //             slug
// //         }
// //         }
// //     }
// // }`;
// export default BlogPage;