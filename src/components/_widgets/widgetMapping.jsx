import Button from './Button'
import Data from './Data'
import Form from './Form'
import ProjectToProduct from './ProjectToProduct'
import Stats from './Stats/index'
import Video from './Video/index'
import Author from './Author/index'
import SpeakerDetails from './SpeakerDetails/index'
import Maps from './Maps/index'
import TicketPurchase from './TicketPurchase/index'
import Card from './Card/index'

const getWidgetFromKontent = contentType => {
  const widgetTypes = {
    kontent_item_widget___button: Button,
    kontent_item_application___data: Data,
    kontent_item_widget___form: Form,
    kontent_item_widget___project_to_product: ProjectToProduct,
    kontent_item_widget___stats: Stats,
    kontent_item_widget___video: Video,
    kontent_item_widget___author: Author,
    kontent_item_widget___speaker_details: SpeakerDetails,
    kontent_item_widget___map: Maps,
    kontent_item_widget___ticket_purchase: TicketPurchase,
    kontent_item_widget___card: Card
  }

  if (!contentType || !widgetTypes[contentType]) {
    console.log('MISSING WIDGET FOR ', contentType)
    return null
  }

  return widgetTypes[contentType]
}

export default getWidgetFromKontent
