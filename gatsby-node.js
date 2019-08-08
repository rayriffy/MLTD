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

  const dataResult = await graphql(`
    query {
      idols: allIdolsJson {
        edges {
          node {
            firstName
            gmType
            height
            hobby
            hometown
            id
            lastName
            likes
            specialSkill
            tdType
            threeSizes
            writingHand
            weight
            zodiacSign
            cv
            color
            bd
            age
            bloodType
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
  `)

  const { site, idols } = dataResult.data
  idols.edges.map((idol, index) => {
    const reg = `/${idol.node.firstName.toLowerCase()}/`
    createPage({
      path: `chara/show/${index + 1}`,
      component: path.resolve("./src/templates/idol-page.tsx"),
      context: {
        idol,
        reg,
      },
    })
  })
}
