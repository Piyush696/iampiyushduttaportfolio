const config = require("./src/data/config");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: config.url,
    title: "Developer portfolio, blog, ecommerce store built with Gatsby",
    description: config.defaultDescription,
    author: config.author,
    rssMetadata: {
      site_url: config.url,
      feed_url: `${config.url}${config.siteRss}`,
      title: "Developer portfolio, blog, ecommerce store built with Gatsby",
      description: config.defaultDescription,
      image_url: `${__dirname}/src/images/icon.png`,
      author: config.author,
      copyright: `${config.defaultTitle} © ${new Date().getFullYear()}`,
    },
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.defaultTitle,
        short_name: config.defaultTitle,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        include_favicon: true,
        cache_busting_mode: `query`,
        legacy: true,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: config.url,
      },
    },
    `gatsby-plugin-nprogress`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto:300,400,500,600`, `Material Icons`],
        display: `swap`,
      },
    },
  ],
};
