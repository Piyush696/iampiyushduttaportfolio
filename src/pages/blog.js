import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import SingleBlog from "../templates/blog/single-blog";

const Blog = ({ pageContext, location }) => {
    // Hardcoded post data
    const post = {
        title: "My First Blog Post",
        excerpt: "This is a short excerpt of the blog post used for SEO.",
        content: "<p>This is the full content of the blog post. Here you can write your story or article.</p>",
        slug: "my-first-blog-post",
        date: "September 10, 2025",
        featured_media: {
            localFile: {
                childImageSharp: {
                    fluid: {
                        src: "/sample-image.jpg", // Place this image in /static or /public
                    },
                },
            },
        },
        author: {
            name: "Piyush Dutta",
            avatar_urls: { wordpress_24: "/avatar.png" }, // Avatar image path
        },
        categories: [
            { name: "Tech", slug: "tech" },
            { name: "React", slug: "react" }
        ],
    };

    // Manage theme toggle
    const [themeType, setThemeType] = useState("dark");

    const handleClick = () => {
        setThemeType(themeType === "dark" ? "light" : "dark");
    };

    const theme = createTheme({
        palette: {
            mode: themeType,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title={post.title}
                    description={post.excerpt}
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
                        <SingleBlog post={post} />
                        <Footer />
                    </section>
                </div>
            </Layout>
        </ThemeProvider>
    );
};

export default Blog;
