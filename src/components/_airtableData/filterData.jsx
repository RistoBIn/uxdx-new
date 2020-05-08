export default (data, highlightName, conferenceId, date) => {
  let filteredData = []
  if (highlightName) {
    const highlightData = data.filter((item) => {
      let match = false
      if (item.data.Promote) {
        item.data.Promote.forEach(promote => {
          if (promote === highlightName) match = true
        })
      } else if (item.data.Highlight) {
        item.data.Highlight.forEach(highlight => {
          if (highlight.data.Highlight_Name === highlightName) match = true
        })
      }
      return match
    })
    if (conferenceId) {
      filteredData = highlightData.filter(item => {
        let match = false
        if (item.data.Conference) {
          item.data.Conference.forEach((conference) => {
            if (conference.data.Conference_Id === conferenceId) match = true
          })
        }
        return match
      })
    } else {
      filteredData = highlightData
    }
  } else if (conferenceId) {
    filteredData = data.filter(item => {
      let match = false
      if (item.data.Conference) {
        item.data.Conference.forEach((conference) => {
          if (conference.data.Conference_Id === conferenceId) match = true
        })
      }
      return match
    })
  } else {
    filteredData = data
  }

  // if date filter by date
  const sameDay = function (day1, day2) {
    const d1 = new Date(day1)
    const d2 = new Date(day2)
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
  }
  if (date) {
    filteredData = filteredData.filter((session) => {
      return sameDay(date, session.data.Agenda_Session_Start_Time)
    })
  }

  return filteredData
}
