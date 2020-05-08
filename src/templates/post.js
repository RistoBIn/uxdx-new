import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Header from '../components/_core/Header'
import Footer from '../components/_core/Footer'
import Body from '../components/_core/Body'
import Sidebar from '../components/_core/Sidebar'
import _ from 'lodash'
import { Grid } from '@material-ui/core'
import moment from 'moment'
import Img from 'gatsby-image'

import '../_styles/post.css'

import Layout from '../components/_core/Layout'
import MetaData from '../components/_core/MetaData'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
  const mainElements = _.get(data, 'allKontentItemApplicationPages.nodes[0].elements')
  const headerData = _.get(mainElements, 'header_menu.linked_items')
  const footerData = _.get(mainElements, 'footer_menu.linked_items')
  const sections = _.get(mainElements, 'sections.linked_items')
  const post = data.ghostPost

  // remove the current post if it is the list
  const latestPosts = data.allGhostPost.edges.filter((post) => {
    return post.node.id !== data.ghostPost.id
  })

  // console.log('latestPosts', latestPosts)

  const authors = data.allAirtable.nodes.filter((author) => {
    return author.data.Ghost_Id != null
  })
  // console.log('authors', authors)

  const PostAuthor = authors.find(item => item.data.Ghost_Id === post.authors[0].slug)

  // console.log(PostAuthor)

  // TODO: Add the following sections
  // tags
  // Comments
  // recommended articles

  // Share this links
  // location.href = 'https://uxdx.com'
  const twitterShare = 'https://twitter.com/intent/tweet/?text=' + post.title + '&url=' + location.href + '%3Futm_source%3Dtwitter%26utm_medium%3Dsocial%26utm_campaign%3Donsite-share%26utm_social-type%3Dearned&text=&via=uxdxconf'
  // const facebookShare = 'https://www.facebook.com/dialog/feed?&display=popup&caption=&app_id=2114826615210912&link=' + location.href + '%3Futm_source%3Dfacebook%26utm_medium%3Dsocial%26utm_campaign%3Donsite-share%26utm_social-type%3Dearned'
  const facebookShare2 = 'http://www.facebook.com/sharer.php?u=' + location.href + '&p[title]=' + post.title
  const linkedinShare = 'https://www.linkedin.com/shareArticle?mini=true&url=' + location.href + '&title=' + post.title + '&summary=' + post.description + '&source=LinkedIn'

  const emailShare = 'mailto:?subject=&body=' + location.href + '%3Futm_source%3Donsite-share%26utm_medium%3Demail%26utm_campaign%3Donsite-share'

  return (
    <Layout>
      <MetaData title={post.meta_title || post.title} description={post.meta_desciption || post.excerpt} image={post.og_image} article />
      <Header data={headerData} />
      <div className='container'>
        <article className='content'>
          {post.feature_image ? <div className='post-feature-image'>
            <img src={post.feature_image} alt={post.title} />
            <h2 class='post-header-title'>{post.title}</h2>
          </div> : null}
          <Grid container className='PostWrapper'>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
              <section className='post-full-content'>
                <div className='postHeader'>
                  {
                    PostAuthor && (
                      <div className='authorInfo'>
                        <div className='authorImg'>
                          <Img fluid={PostAuthor.data.Speaker_Profile_Picture.localFiles[0].childImageSharp.fluid} alt={PostAuthor.data.Speaker_First} className='speakerProfile' />
                        </div>
                        <div className='authorContent'>
                          <p>{moment(post.published_at).format('Do MMMM YYYY')}</p>
                          <p className='authName'>by {PostAuthor.data.Speaker_First} {PostAuthor.data.Speaker_Last}</p>
                          {/* <p className='readingTime'>{post.reading_time} mins read</p> */}
                          {/* <a href='#'>More articles by this author</a> */}
                        </div>
                      </div>
                    )
                  }
                  <div className='socialMedia'>
                    <p>Share this</p>
                    <div className='links'>
                      <a href={facebookShare2} target='_blank' rel='noopener noreferrer'>
                        <svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M20.1834 40.8068C8.85915 40.6018 -0.255798 31.2897 0.00548011 19.8876C0.26345 8.4491 9.71905 -0.0793208 20.5571 0.0231922C31.7854 0.132319 41.284 9.52714 40.8243 21.3095C40.401 32.2453 31.3588 40.9358 20.1834 40.8068ZM22.7036 34.4841C22.7036 33.5615 22.7036 32.7182 22.7036 31.875C22.7036 31.0284 22.7002 30.1852 22.7002 29.3386C22.7002 28.492 22.7002 27.6488 22.7002 26.8022C22.7002 25.9557 22.6936 25.1124 22.6969 24.2659C22.7002 23.4292 22.6606 22.5893 22.7168 21.6931C24.172 21.6931 25.5412 21.6931 26.9799 21.6931C27.1949 20.0132 27.3999 18.3929 27.6215 16.6634C25.948 16.6634 24.3605 16.6634 22.6771 16.6634C22.6771 16.1541 22.6738 15.7374 22.6771 15.3241C22.687 14.4775 22.6539 13.631 22.7267 12.791C22.8061 11.8386 23.3419 11.2996 24.2745 11.1277C24.6218 11.0648 24.9823 11.0516 25.3362 11.045C25.9811 11.0318 26.626 11.045 27.271 11.0384C27.4165 11.0384 27.5653 11.002 27.7737 10.9755C27.7505 9.48746 27.81 8.03243 27.7075 6.51789C26.6029 6.46167 25.5644 6.37569 24.5226 6.36577C23.7917 6.35916 23.0475 6.37569 22.3331 6.51127C20.2065 6.9114 18.7017 8.09857 17.9609 10.1786C17.6434 11.0681 17.5111 11.9908 17.5045 12.9299C17.5012 13.955 17.5111 14.9769 17.5111 16.002C17.5111 16.1938 17.4813 16.3889 17.4615 16.6237C16.036 16.6997 14.6403 16.5873 13.2678 16.6964C13.2678 18.3862 13.2678 20 13.2678 21.6865C14.6899 21.6865 16.0592 21.6865 17.4879 21.6865C17.5045 22.0205 17.5243 22.2817 17.5243 22.5397C17.5408 26.2797 17.5508 30.0165 17.5673 33.7566C17.5673 33.9881 17.6004 34.2228 17.6169 34.4874C19.3301 34.4841 20.9672 34.4841 22.7036 34.4841Z' fill='#3C5898' />
                        </svg>
                      </a>
                      <a href={twitterShare} target='_blank' rel='noopener noreferrer'>
                        <svg width='42' height='41' viewBox='0 0 42 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M41.6799 20.4981C41.6667 31.7611 32.5265 40.8537 21.2421 40.8305C9.98748 40.8074 0.777686 31.6054 0.840653 20.3391C0.90362 8.78445 10.2725 -0.0165448 21.2951 2.33536e-05C32.5132 0.0232187 41.776 9.32457 41.6799 20.4981ZM8.38016 29.5278C9.03303 30.0281 9.7323 30.3992 10.468 30.7074C13.0331 31.7777 15.6976 32.1588 18.4616 31.8771C22.5975 31.453 26.0839 29.7299 28.7816 26.5554C31.4196 23.4506 32.7386 19.8188 32.7485 15.7331C32.7485 15.3057 32.9175 15.0605 33.2191 14.7821C33.9018 14.1492 34.5282 13.45 35.1711 12.7707C35.2606 12.6746 35.297 12.5322 35.3998 12.3267C34.8728 12.499 34.4586 12.6415 34.0344 12.7707C33.292 12.9928 33.2191 12.9994 32.7419 12.8933C33.6433 12.1511 34.3525 11.3028 34.727 10.0735C34.4321 10.2093 34.2597 10.2988 34.0808 10.3684C33.2887 10.6666 32.4966 10.9582 31.7046 11.2564C31.3798 11.379 31.1379 11.3061 30.8661 11.0642C29.0368 9.44055 26.5943 9.1357 24.4501 10.2325C22.3954 11.2829 21.2421 13.4368 21.4475 15.8392C21.4641 16.0314 21.474 16.2235 21.4906 16.4919C19.194 16.3925 17.0995 15.7928 15.1077 14.7821C13.116 13.7748 11.439 12.3731 9.95103 10.65C9.36113 11.5513 9.16891 12.4858 9.17222 13.4467C9.17885 15.2858 9.9444 16.7968 11.3264 18.046C10.9419 18.046 10.6006 18.0096 10.2725 17.9168C9.91789 17.8174 9.57654 17.665 9.13245 17.4993C9.28159 20.3424 10.7166 22.1085 13.2949 23.0496C13.2684 23.0927 13.2452 23.1391 13.2187 23.1822C12.5625 23.1822 11.9063 23.1822 11.2501 23.1822C11.4291 24.9682 13.3678 26.5289 16.2312 27.1718C13.8517 28.9512 11.2601 29.6338 8.38016 29.5278Z' fill='#6AADD1' />
                        </svg>
                      </a>
                      <a href={linkedinShare} target='_blank' rel='noopener noreferrer'>
                        <svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M40.835 20.8597C40.6363 31.8656 31.4999 41.0339 20.0355 40.8187C8.90892 40.6101 -0.227489 31.4451 0.00431589 20.0087C0.23612 8.53923 9.68712 -0.13573 20.7078 0.00995631C31.9172 0.162265 41.0933 9.50937 40.835 20.8597ZM33.1259 32.1702C33.1259 31.8822 33.1259 31.6438 33.1259 31.4054C33.1225 28.7102 33.1325 26.0117 33.1126 23.3165C33.106 22.4258 33.0629 21.5351 32.9835 20.6478C32.8874 19.5518 32.6192 18.4956 32.0827 17.5221C31.5794 16.6116 30.8542 15.9494 29.8939 15.5454C28.6057 15.0024 27.2546 14.87 25.8936 15.0587C24.41 15.2673 23.1318 15.903 22.2046 17.1347C22.1218 17.2473 22.0092 17.3367 21.8304 17.5155C21.8039 16.7506 21.784 16.1017 21.7608 15.4693C20.6614 15.3368 17.2969 15.3832 16.8201 15.5222C16.8201 21.0583 16.8201 26.5977 16.8201 32.2066C18.5752 32.2331 20.274 32.2364 22.0224 32.1967C22.0224 31.859 22.0224 31.614 22.0224 31.3723C22.0257 28.6969 22.0092 26.0216 22.0456 23.3496C22.0555 22.6907 22.1714 22.0119 22.3701 21.3828C22.7609 20.161 23.8669 19.5286 25.2677 19.6114C26.5989 19.6909 27.3639 20.2935 27.6354 21.6378C27.791 22.396 27.8242 23.184 27.8341 23.9621C27.8639 26.4586 27.8573 28.9552 27.8672 31.4517C27.8672 31.6868 27.897 31.9219 27.9136 32.1702C29.6753 32.1702 31.3542 32.1702 33.1259 32.1702ZM13.4523 32.1702C13.4755 32.0312 13.5053 31.9451 13.5053 31.8557C13.5053 26.5083 13.4986 21.161 13.4953 15.8136C13.4953 15.7275 13.4722 15.6381 13.4556 15.552C13.4523 15.5322 13.4324 15.5156 13.4192 15.4991C13.4026 15.4825 13.3861 15.4693 13.3794 15.4593C11.6906 15.4593 10.0083 15.4593 8.30292 15.4593C8.30292 21.0484 8.30292 26.5845 8.30292 32.1669C10.0448 32.1702 11.7469 32.1702 13.4523 32.1702ZM10.813 13.1283C12.4986 13.1548 13.8662 11.8536 13.9027 10.1848C13.9424 8.45976 12.641 7.09892 10.919 7.07243C9.20695 7.04594 7.86911 8.3207 7.83599 10.0093C7.80619 11.7576 9.08774 13.1052 10.813 13.1283Z' fill='#0077B7' />
                        </svg>
                      </a>
                      <a href={emailShare} target='_blank' rel='noopener noreferrer'>
                        <svg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <circle cx='21' cy='21' r='21' fill='#3DB97D' />
                          <path d='M35.3617 10.7872H6.63827C6.63392 10.7872 6.62963 10.7877 6.62535 10.7877L6.62541 10.7879C6.27894 10.7948 6 11.0771 6 11.4256V30.5745C6 30.9273 6.28586 31.2128 6.63827 31.2128H35.3617C35.7142 31.2128 36 30.9273 36 30.5745V11.4256C36 11.0727 35.7142 10.7872 35.3617 10.7872ZM33.8208 12.0639L25.3363 20.5484C25.3362 20.5485 25.336 20.5486 25.3359 20.5487L21 24.8847L16.6641 20.5487C16.6638 20.5484 16.6636 20.5483 16.6633 20.5479L8.17922 12.0639H33.8208ZM7.27659 12.9664L15.3102 21L7.27659 29.0336V12.9664ZM8.17922 29.9362L16.2128 21.9025L20.5488 26.2385C20.771 26.4607 21.1183 26.5715 21.4514 26.2385L25.7873 21.9026L33.8209 29.9362H8.17922ZM34.7234 29.0335L26.6899 21L34.7234 12.9665V29.0335Z' fill='white' />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h1 className='content-title'>{post.title}</h1>
                {/* The main post content */}
                <section
                  className='content-body load-external-scripts'
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </section>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Sidebar data={latestPosts} authors={authors} />
            </Grid>
          </Grid>
        </article>
      </div>
      <Body data={sections} />
      <Footer data={footerData} />
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string
    }).isRequired
  }).isRequired,
  location: PropTypes.object.isRequired
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      id
      slug
      title
      html
      # codeinjection_styles
      og_description
      og_image
      og_title
      feature_image
      excerpt
      published_at
      twitter_title
      twitter_image
      twitter_description
      meta_title
      meta_description
      # reading_time
      tags {
        id
        slug
      }
      primary_tag {
        id
        slug
      }
      authors {
        id
        slug
      }
    }
    allGhostPost(sort: { order: DESC, fields: published_at }, limit: 5) {
      edges {
        node {
          id
          slug
          title
          html
          # codeinjection_styles
          og_description
          og_image
          og_title
          feature_image
          excerpt
          published_at
          twitter_title
          twitter_image
          twitter_description
          meta_title
          meta_description
          # reading_time
          tags {
            id
            slug
          }
          primary_tag {
            id
            slug
          }
          authors {
            id
            slug
          }
        }
      }
    }
    allAirtable(filter: {table: {eq: "Speakers"}}) {
      nodes {
        id
        data {
          Speaker_First
          Speaker_Last
          Ghost_Id
          Speaker_Profile_Picture {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 230, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          speaker_url_slug
        }
      }
    }

    allKontentItemApplicationPages(filter: {elements: {url_slug: {value: {eq: "generic-blog"}}}}) {
      nodes {
        elements {
          ...PageDataFragment
        }
      }
    }
  }
`
