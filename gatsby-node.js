/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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
            cards {
              name
              avability
              passive
              rarity
              stat
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      throw res.errors
    }

    res.data.allIdolsJson.edges.forEach(edge => {
      createPage({
        path: `/chara/show/${res.data.allIdolsJson.edges.indexOf(edge) + 1}`,
        component: path.resolve(`src/templates/idol-page.tsx`),
        context: {
          idolInfo: edge.node,
        },
      })
    })
  })
}
