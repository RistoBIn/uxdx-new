import AttendeeCompanies from '../../_airtableData/AttendeeCompanies'
import SpeakerCard from '../../_airtableData/SpeakerCard'
import Sessions from '../../_airtableData/Sessions'
import Partners from '../../_airtableData/Partners'
import Tickets from '../../_airtableData/Tickets'
import Conferences from '../../_airtableData/Conferences'
import SpeakerSessions from '../../_airtableData/SpeakerSessions'
import Countdown from '../../_airtableData/Countdown'
import Articles from '../../_airtableData/Articles'

const getDataFromAirtable = (dataType, style) => {
  const dataTypes = {
    speakers: {
      Default: SpeakerCard
      // Video: SpeakerVideo
    },
    attendee_companies: {
      Default: AttendeeCompanies
    },
    sessions: {
      Default: Sessions,
      SpeakerSessions: SpeakerSessions
    },
    partners: {
      Default: Partners
    },
    tickets: {
      Default: Tickets
    },
    conferences: {
      Default: Conferences
    },
    countdown: {
      Default: Countdown
    },
    articles: {
      Default: Articles
    }
  }

  if (!dataType || !dataTypes[dataType]) {
    return null
  }

  return dataTypes[dataType][style]
}

export default getDataFromAirtable
