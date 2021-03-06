require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// This ignores modules that need to access 'window' during the build process
 exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@firebase/,
            use: loaders.null(),
          },
          {
            test: /@toast-ui/,
            use: loaders.null(),
          },
          {
            test: /react-konva/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// You can delete this file if you're not using it
// Implement the Gatsby API “onCreatePage”. This is
// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   deletePage(page)
//   // You can access the variable "house" in your page queries now
//   createPage({
//     ...page,
//     context: {
//       ...page.context,
//       house: `Gryffindor`
//     },
//   })
// }
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/app/)) {
      page.matchPath = "/app/*"
  
      // Update the page.
      createPage(page)
    }
  }


  exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      node: {
        fs: "empty",
      },
    })
  }

  // exports.onCreateWebpackConfig = ({
  //   actions,
  // }) => {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /\.md$/,
  //           loaders: ['html-loader'],
  //         },
  //         {
  //           test: /\.html$/,
  //           loader: 'html-loader',
  //           options: {
  //             minimize: false,
  //           },
  //         },
  //       ],
  //     },
  //   })
  // }