const request = require("request")
const cheerio = require("cheerio")

request("http://imas.gamedbs.jp/mlth/chara/show/44/264", function(
  err,
  res,
  html
) {
  if (!err) {
    console.log(html)
  }
})
