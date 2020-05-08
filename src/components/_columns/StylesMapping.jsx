import Header from './Header'
import Challenge from './Challenge'
import Default from './Default'
import CardImageBottom from './CardImageBottom'
import ProjectToProduct from './ProjectToProduct'
import CardSVG from './CardSVG'
import CardSVGMergeTitles from './CardSVGMergeTitles'
import CardHorizontal from './CardHorizontal'
import CardTitleInImage from './CardTitleInImage'
import LargeContent from './LargeContent'
import Testimonial from './Testimonial'
import Stats from './stats'
import StatsHorizontal from './StatsHorizontal'
import FAQ from './FAQS'
import Venue from './Venue'
import Tabs from './Tabs'

const getStyledColumn = styleName => {
  // console.log(styleName)
  const styleColumnComponent = {
    Header,
    Challenge,
    Default,
    CardImageBottom,
    ProjectToProduct,
    CardSVG,
    CardSVGMergeTitles,
    CardHorizontal,
    CardTitleInImage,
    LargeContent,
    Testimonial,
    Stats,
    StatsHorizontal,
    FAQ,
    Venue,
    Tabs
  }

  if (!styleName || !styleColumnComponent[styleName]) {
    return null
  }

  return styleColumnComponent[styleName]
}

export default getStyledColumn
