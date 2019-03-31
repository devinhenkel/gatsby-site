import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from "../components/layout"

class BlogPost extends Component {
    render() {
        const {
            title,
            body
        } = this.props.data.contentfulBlogPost;
        return (
            <Layout>
                <div>
                    <h1>{title}</h1>
                </div>
                <div class="blog-content"
                dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}
                ></div>
            </Layout>
        );
    }
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost;

export const pageQuery = graphql`
query blogPostQuery($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        slug
        body {
            childMarkdownRemark {
                html
            }
        }
    }
}
`