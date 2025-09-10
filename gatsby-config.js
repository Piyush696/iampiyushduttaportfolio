const config = require("./src/data/config")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: config.url,
    title: "Developer portfolio, blog, ecommerce store built with gatsby",
    description: config.defaultDescription,
    author: config.author,
    rssMetadata: {
      site_url: config.url,
      feed_url: `${config.url}${config.siteRss}`,
      title: "Developer portfolio, blog, ecommerce store built with gatsby",
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
        icon: `src/images/icon.png`,          // Source image for all icons
        include_favicon: true,                // Enable favicon generation :contentReference[oaicite:1]{index=1}
        cache_busting_mode: `query`,
        legacy: true,                         // Generate legacy Apple touch icons
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
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
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: "rajeshroyal.com",
        protocol: "https",
        hostingWPCOM: false,
        useACF: false,
        includedRoutes: [
          "**/categories", "**/posts", "**/pages",
          "**/media", "**/tags", "**/taxonomies", "**/users",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                rssMetadata {
                  site_url
                  title
                  author
                  copyright
                  description
                }
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWordpressPost } }) =>
              allWordpressPost.edges.map(({ node }) => ({
                description: node.excerpt,
                date: node.date,
                url: `${site.siteMetadata.rssMetadata.site_url}${node.slug}`,
                guid: `${site.siteMetadata.rssMetadata.site_url}${node.slug}`,
                custom_elements: [{ "content:encoded": node.content }],
                image: `${site.siteMetadata.rssMetadata.site_url}${node.featured_media.localFile.childImageSharp.fluid.src}`,
                title: node.title,
              })),
            query: `
              {
                allWordpressPost {
                  edges {
                    node {
                      title
                      excerpt
                      date
                      slug
                      content
                      featured_media {
                        localFile {
                          childImageSharp {
                            fluid {
                              src
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: config.siteRss,
            title: config.defaultTitle,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto:300,400,500,600`,
          `Material Icons`,
        ],
        display: `swap`,
      },
    },
  ],
}
