const path = require('path')
const fs = require('fs-extra')

// save the cache so you don't need to download the files from airtable over and over again
// exports.onPostBootstrap = async ({ reporter }) => {
//   await fs.ensureDir('node_modules/.cache/gatsby-source-filesystem')

//   if (fs.existsSync('.cache/gatsby-source-filesystem')) {
//     reporter.info(
//       'onPostBuild: Copying gatsby-source-filesystem to node_modules'
//     )
//     await fs.copy(
//       '.cache/gatsby-source-filesystem',
//       'node_modules/.cache/gatsby-source-filesystem'
//     )
//   }
// }

// exports.onPreBootstrap = async ({ reporter }) => {
//   if (fs.existsSync('node_modules/.cache/gatsby-source-filesystem')) {
//     reporter.info(
//       'onPreBootstrap: Copying gatsby-source-filesystem to .cache'
//     )
//     await fs.copy(
//       'node_modules/.cache/gatsby-source-filesystem',
//       '.cache/gatsby-source-filesystem'
//     )
//   }
// }

exports.onPostBuild = () => {
  fs.copyFile('./firebase.json', './public/firebase.json', (err) => {
    if (err) {
      throw err
    }
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const createKontentPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allKontentItemApplicationPages {
          totalCount
          nodes {
            id
            elements {
              url_slug {
                type
                value
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors)
      }
      const pages = result.data.allKontentItemApplicationPages.nodes

      pages.forEach(node => {
        // I want the home page to have the / prefix instead of the home variable
        const slug = node.elements.url_slug.value === 'home' ? '/' : node.elements.url_slug.value
        // console.log('pages', slug)
        createPage({
          path: slug,
          component: path.resolve('./src/templates/page.js'),
          context: {
            slug: node.elements.url_slug.value,
            id: node.id
          }
        })
      })
      resolve()
    })
  })

  // TODO: fix the post template - create a generic template for header / footer etc and separate out pages and posts. Need to find a way to default the right header / footer
  const createGhostPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allGhostPost(sort: { order: DESC, fields: [published_at] }) {
          edges {
            node {
              id
              slug
              authors {
                id
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors)
      }
      const pages = result.data.allGhostPost.edges

      pages.forEach(edge => {
        // tidy up authors
        const authors = edge.node.authors.map((authorObj) => {
          return authorObj.slug
        }).filter(el => {
          return el != null
        })

        createPage({
          path: 'blog/' + edge.node.slug,
          component: path.resolve('./src/templates/post.js'),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
            authors: authors
          }
        })
      })
      resolve()
    })
  })

  // Speaker page
  const createSpeakerPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allAirtable(filter: { table: { eq: "Speakers" }, data: {Speaker_Status: {eq: "Published"}} }) {
          nodes {
            id
            data {
              speaker_url_slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors)
      }
      const pages = result.data.allAirtable.nodes

      pages.forEach(node => {
        createPage({
          path: 'profile/' + node.data.speaker_url_slug,
          component: path.resolve('./src/templates/speaker.js'),
          context: {
            slug: node.data.speaker_url_slug,
            id: node.id
          }
        })
      })
      resolve()
    })
  })

  // Community page
  const createCommunityPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allAirtable(filter: {table: {eq: "Conference"}, data: {Type: {eq: "Community"}, Conference_Status: {eq: "Published"}}}) {
          nodes {
            id
            data {
              Conference_Id
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors)
      }
      const pages = result.data.allAirtable.nodes

      pages.forEach(node => {
        // calculate the slug
        const slug = node.data.Conference_Id.replace(/-/g, '/')
        createPage({
          path: slug,
          component: path.resolve('./src/templates/community.js'),
          context: {
            slug: slug,
            id: node.id
          }
        })
      })
      resolve()
    })
  })

  // return Promise.all([createKontentPages, createGhostPages, createSpeakerPages])
  // return Promise.all([createKontentPages])
  return Promise.all([createKontentPages, createGhostPages, createSpeakerPages, createCommunityPages])
}
