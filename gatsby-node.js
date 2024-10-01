/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const mdx = `### Hello world!
This is the first paragraph. It contains some text.

This is the second paragraph. It is separated from the first paragraph by a blank line.

This is the third paragraph.
`
const { parseMDX } = require("@tinacms/mdx")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {
      mdx: parseMDX(mdx, { field: { parser: { type: "markdown" } } }),
    },
    defer: true,
  })
}

const express = require("express")
exports.onCreateDevServer = ({ app }) => {
  app.use("/admin", express.static("public/admin"))
}
