import React from 'react'
import { Remarkable } from 'remarkable'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Fab from '@material-ui/core/Fab'
import DoubleArrowImg from 'src/images/arrows.svg'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import moment from 'moment'
import Img from 'gatsby-image'

const md = new Remarkable()
const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const Articles = function (data) {
  const articleQuery = useStaticQuery(graphql`
    query articleQuery {
      allGhostPost {
        edges {
          node {
            id
            slug
            title
            html
            og_description
            og_image
            og_title
            feature_image
            excerpt
            published_at
            twitter_title
            twitter_image
            # reading_time
            twitter_description
            meta_title
            meta_description
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
    }
  `)

  const allArticles = articleQuery.allGhostPost.edges

  // filter the articles by the speaker
  const speakerArticles = allArticles.filter((article) => {
    let match = false
    article.node.authors.forEach((author) => {
      if (author.slug === data.data.speaker) match = true
    })
    return match
  })

  const settings = {
    dots: false,
    autoplay: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3.2,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2
        }
      }
    ]
  }

  function NextArrow (props) {
    const classes = useStyles()
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} ${classes.arrowNext}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <Fab color='primary' size='small' className={classes.fab} aria-label='add'>
          <img src={DoubleArrowImg} alt='' />
        </Fab>
      </div>
    )
  }

  function PrevArrow (props) {
    const classes = useStyles()
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} ${classes.arrowPrev}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <Fab color='primary' size='small' className={classes.fab} aria-label='add'>
          <img src={DoubleArrowImg} alt='' />
        </Fab>
      </div>
    )
  }

  const classes = useStyles()

  const renderedArticles = speakerArticles.map((article) => {
    // console.log('article', article)
    return (
      <Card className={classes.card} key={article.node.id}>
        <CardContent className={classes.cardInner}>
          <div className={classes.cardBody}>
            <img src={article.node.feature_image} className={classes.FeatureImage} />
            <div className={classes.cardContent}>
              <Typography className={classes.title}>
                <a href={`/blog/${article.node.slug}`}>{article.node.title}</a>
              </Typography>
              <Typography className={classes.excerpt}>{article.node.excerpt.length > 150 ? (
                <>
                  {article.node.excerpt.substr(0, 150)}... <a href={`/blog/${article.node.slug}`}>Read More</a>
                </>
              ) : article.node.excerpt}
              </Typography>
              <div className={classes.highlights}>
                {
                  article.node.tags.map((tag, index) => (
                    <span className={classes.tag} key={index}>#{tag.slug.replace(/-/g, ' ')}</span>
                  ))
                }
              </div>
              <div className={classes.cardFoot}>
                <Typography className={classes.publishDate}>{moment(article.node.published_at).format('Do MMMM YYYY')}</Typography>
                {/* <Typography className={classes.ReadingTime}>{article.node.reading_time} Mins Read</Typography> */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  })

  // TODO: convert speakersArticles to articles list with carousel

  const DesktopArticles = (renderedArticles) => {
    if (renderedArticles && renderedArticles.length > 4) {
      return (
        <Slider {...settings} className={classes.slickSliderWrapper}>
          {renderedArticles}
        </Slider>
      )
    } else if (renderedArticles && renderedArticles.length == 1) {
      return (
        <>{renderedArticles}</>
      )
    } else {
      return (
        <div className={`${classes.sliderWrapper}`}>{renderedArticles}</div>
      )
    }
  }

  const MobileArticles = (renderedArticles) => {
    if (renderedArticles && renderedArticles.length > 1) {
      return (
        <Slider {...settings} className={classes.slickSliderWrapper}>
          {renderedArticles}
        </Slider>
      )
    } else {
      return (
        <>{renderedArticles}</>
      )
    }
  }

  const SpeakerArticles = useMediaQuery(theme => theme.breakpoints.up('md')) ? DesktopArticles(renderedArticles) : MobileArticles(renderedArticles)

  if (renderedArticles.length) {
    return (
      <div className={classes.ArticlesWrapper}>
        <h2 className={classes.SectionHeading}>Articles</h2>
        {SpeakerArticles}
      </div>
    )
  }
  return null
}

export default Articles
