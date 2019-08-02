/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const idolPage = path.resolve(`src/templates/idol-page.tsx`)

  return graphql(`
    query idol {
      allIdolsJson {
        edges {
          node {
            id
            name
            cv
            imageColor
            tdType
            gmType
            height
            weight
            bloodType
            threeSizes
            hometown
            hobby
            specialSkill
            likes
            age
            bd
            writingHand
            zodiacSign
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      throw res.errors
    }

    res.data.allIdolsJson.edges.forEach(edge => {
      console.log(res.data.allIdolsJson.edges.indexOf(edge) + 1)
      createPage({
        path: `/chara/show/${res.data.allIdolsJson.edges.indexOf(edge) + 1}`,
        component: idolPage,
        context: {},
      })
    })
  })
}
