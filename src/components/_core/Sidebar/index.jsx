import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import moment from 'moment'
import Img from 'gatsby-image'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles,
  [theme.breakpoints.up('lg')]: {
    PostWrapper: {
      borderLeft: 'solid 1px black'
    }
  }
}))

export default function SideBar ({ data, authors }) {
  const classes = useStyles()

  const LatestPosts = data

  function AuthorDetails ({ post }) {
    const author = authors.find(item => item.data.Ghost_Id === post.node.authors[0].slug)
    // console.log(author)
    if (author) {
      return (
        <div className={classes.flex}>
          <Img className={classes.sideBarSpeaker} fluid={author.data.Speaker_Profile_Picture.localFiles[0].childImageSharp.fluid} alt={author.speaker_url_slug} />
          <p>{author.data.Speaker_First} {author.data.Speaker_Last}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className={classes.PostWrapper}>
      <h3 className={classes.Heading}>Most Recent</h3>
      {LatestPosts.map((post) => (
        <aside className={classes.recentPost} key={post.node.id}>
          <img src={post.node.feature_image} className={classes.postImage} />
          <div className={classes.postContent}>
            <p className={classes.Date}>{moment(post.node.published_at).format('Do MMMM YYYY')}</p>
            <h5 className={classes.postTitle}>
              <a href={`/blog/${post.node.slug}`}>{post.node.title}</a>
            </h5>
            <AuthorDetails post={post} />
          </div>
        </aside>
      ))}
    </div>
  )
}
