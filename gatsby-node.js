/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const _ = require(`lodash`);

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === `KontentItemApplicationPages`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.elements.url_slug.value,
    })
  }
}

