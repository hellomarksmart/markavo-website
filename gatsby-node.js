const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      home_page: allPrismicHomePage {
        nodes {
          id
          lang
          url
        }
      }   
    }
  `)  

  if (result.errors) {
    throw result.errors
  }

  const homePage = result.data.home_page.nodes
  
  homePage.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/homepage.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
