import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductForm from "../components/form"
import SiteHead from "../components/site-head"
import ProductHighlight from "../templates/product-highlight"
import ProductVideo from "../templates/product-video"

const BlogPost = ({node}) => {
  return (
    <li><Link to={'/'+node.slug} >{node.title}</Link></li>
  )
}

class IndexPage extends React.Component {
  render() {
    const pageBanner = this.props.data.contentfulBanner
    const blogPosts = this.props.data.allContentfulBlogPost
    const productHighlights = this.props.data.allContentfulProductHighlight
    const productVideo = this.props.data.contentfulProductVideo
    return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <SiteHead data={pageBanner.headline} />

          <p>{pageBanner.subheadline.subheadline}</p>
          
          <img alt={pageBanner.heroImages[0].title} src={pageBanner.heroImages[0].fluid.src} width="644px"></img>
          <img class="mobilephone" alt={pageBanner.heroImages[1].title} src={pageBanner.heroImages[1].fluid.src} width="163px"></img>
          <p></p>
          <div id="product-highlights">
            {productHighlights.edges.map((edge,i) => <ProductHighlight key={i} node={edge.node} />)}
          </div>
          <div id="product-videos">
            <ProductVideo node={productVideo} />
          </div>
          <p></p>
          <h3>Blog Posts</h3>
          <ul>
            {blogPosts.edges.map((edge, i) => <BlogPost key={i} node={edge.node} />)}
          </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
    query BannerQuery {
        contentfulBanner(title: {eq: "CedarBanner"}) {
              title
              headline
              subheadline {
                subheadline
              }
              productLogo {
                fluid {
                  src
                }
              }
              heroImages {
                title
                fluid {
                  src
                }
              }
        },
        allContentfulBlogPost (limit: 10) {
          edges {
            node {
              title
              slug
            }
          }
        },
        allContentfulProductHighlight {
          edges {
            node {
              title
              highlightHeadline
              highlightText
              highlightImage {
                fluid {
                  src
                }
              }
            }
          }
        },
        contentfulProductVideo(title: {eq: "Cedar Video"}) {
          videoHeadline
          videoDescription
          videoSource
        }
      }
`
