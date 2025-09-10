import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "../../components/global/layouts/layout";
import SEO from "../../components/global/seo/seo";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import SingleBlog from "./single-blog";

const Blog = ({ data, pageContext, location }) => {
    // Hardcoded data instead of using data from GraphQL
    const post = {
        title: "Sample Blog Post",
        excerpt: "<p>This is a short description of the blog post.</p>",
        content: "<p>This is the full content of the blog post.</p>",
        slug: "sample-blog-post",
        date: "September 10, 2025",
        featured_media: {
            localFile: {
                childImageSharp: {
                    fluid: {
                        src: "/sample-image.jpg",
                    },
                },
            },
        },
    };

    const [themeType, setThemeType] = useState("dark");

    const handleClick = () => {
        setThemeType(themeType === "dark" ? "light" : "dark");
    };

    console.log("Layout:", Layout);
    console.log("SEO:", SEO);
    console.log("Header:", Header);
    console.log("Footer:", Footer);
    console.log("SingleBlog:", SingleBlog);

    return (
        <ThemeProvider theme={themeType === "dark" ? { palette: { mode: "dark" } } : { palette: { mode: "light" } }}>
            <Layout>
                <SEO
                    title={post.title}
                    description="This is a short description of the blog post."
                    image={post.featured_media.localFile.childImageSharp.fluid.src}
                    slug={post.slug}
                    lang="en_US"
                    type="NewsArticle"
                    articleBody={post.content}
                    datePublished={post.date}
                    dateModified={post.date}
                />
                <Header handleClick={handleClick} themeType={themeType} />
                <div className="main">
                    <section className="content-container">
                        <SingleBlog post={post} pageContext={pageContext} />
                        <Footer />
                    </section>
                </div>
            </Layout>
        </ThemeProvider>
    );
};

export default Blog;
