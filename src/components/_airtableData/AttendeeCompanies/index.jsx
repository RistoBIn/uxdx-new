import React from 'react'
import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Img from 'gatsby-image'

import filterData from '../filterData'
import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const AttendeeCompanies = ({ highlight, conference, title }) => {
  const companiesData = useStaticQuery(graphql`
    query companiesData {
      companies: allAirtable(filter: { table: { eq: "Companies" } }) {
        nodes {
          id
          data {
            Company_Name,
            Company_Logo {
              raw {
                url
                type
                size
                thumbnails {
                  large {
                    height
                    url
                    width
                  }
                }
              }
              localFiles {
                childImageSharp {
                  fixed(width: 100, quality: 80) {
                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                  }
                }
              }
              # url,
              # thumbnails {
              #   full {
              #     url,
              #     width,
              #     height
              #   },
              #   large {
              #     url,
              #     width,
              #     height
              #   },
              #   small {
              #     url,
              #     width,
              #     height
              #   }
              # }
            }
            Promote
          }
        }
      }
    }
  `)

  const filteredData = filterData(companiesData.companies.nodes, highlight, conference)
  const classes = useStyles()

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  }

  const companyWidget = filteredData.map((item, index) => {
    const image = item.data.Company_Logo
    // console.log(image)
    const width = image.raw[0].thumbnails.large.width
    const height = image.raw[0].thumbnails.large.height
    const className = width > height * 1.1 ? 'long' : 'square'

    if (image.localFiles && image.localFiles[0] && image.localFiles[0].childImageSharp && image.localFiles[0].childImageSharp.fixed) {
      return (<div className={classes.box} key={index}><Img fixed={image.localFiles[0].childImageSharp.fixed} alt={item.data.Company_Name} className={classes[className]} /></div>)
    } else {
      return (<div className={classes.box} key={index}><img src={image.raw[0].thumbnails.large.url} alt={item.data.Company_Name} className={classes[className]} /></div>)
    }
  })
  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>{title}</h2>
      <Slider {...settings} className={classes.slickSliderWrapper}>
        {companyWidget}
      </Slider>
    </div>
  )
}

export default AttendeeCompanies
