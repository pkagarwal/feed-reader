imort Parser from "rss-parser"


export function handler(event, context, callback) {
  const FEEDS = [
    'https://codepen.io/posts/feed',
    'https://hnrss.org/frontpage',
    'http://github-trends.ryotarai.info/rss/github_trends_javascript_daily.rss'
  ]

  let parser = new Parser()

  const feedRequests = FEEDS.map(feed => {
    return parser.parseURL(feed)
  })

  Promise.all(feedRequests).then(response => {
    callback(null, {
      statuscode: 200,
      body: JSON.stringify(response)
    })
  })

}
