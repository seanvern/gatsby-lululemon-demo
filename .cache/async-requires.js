// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---templates-post-js": () => import("/Users/svernon/Projects/lulu-gatsby/templates/post.js" /* webpackChunkName: "component---templates-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/svernon/Projects/lulu-gatsby/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("/Users/svernon/Projects/lulu-gatsby/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("/Users/svernon/Projects/lulu-gatsby/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-contact-mdx": () => import("/Users/svernon/Projects/lulu-gatsby/src/pages/contact.mdx" /* webpackChunkName: "component---src-pages-contact-mdx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/svernon/Projects/lulu-gatsby/.cache/data.json")

