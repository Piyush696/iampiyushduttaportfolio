const Category = ({ data, pageContext, location }) => {
  const [themeType, setThemeType] = useState("dark");

  const handleClick = () => {
    setThemeType(themeType === "dark" ? "light" : "dark");
  };

  // Mock data
  const mockData = {
    allWordpressPost: {
      edges: [
        {
          node: {
            title: "Sample Post",
            excerpt: "<p>This is an excerpt</p>",
            content: "<p>Full content here</p>",
            slug: "sample-post",
            date: "September 10, 2025",
            author: {
              name: "John Doe",
              avatar_urls: {
                wordpress_24: "https://via.placeholder.com/24",
              },
            },
            featured_media: {
              localFile: {
                childImageSharp: {
                  fixed: {
                    src: "/sample-image.jpg",
                  },
                },
              },
            },
          },
        },
      ],
    },
  };

  return (
    <ThemeProvider theme={themeType === "dark" ? darkTheme : lightTheme}>
      <Layout>
        <SEO
          title={pageContext.name}
          description={`Category ${pageContext.name} posts`}
          image={DefaultCategoryImage}
          slug={pageContext.slug}
          lang="en_US"
          type="Organization"
        />
        <Header handleClick={handleClick} themeType={themeType} />
        <div className="main">
          <section className="content-container">
            <SingleCategory data={mockData} pageContext={pageContext} />
            <Footer />
          </section>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default Category;
