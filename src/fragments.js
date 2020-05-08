import { graphql } from 'gatsby'

export const PageDataFragment = graphql`
  fragment PageDataFragment on kontent_item_application___pagesElements {
    url_slug {
      value
    }
    menu_title {
      value
    }
    meta_title {
      name
      value
    }
    meta_description {
      name
      value
    }
    external_link {
      value
    }
    widget__alert {
      linked_items {
        ... on kontent_item_application___data {
          id,
          elements {
            conference {
              value
            }
            highlight {
              value
            }
            data_type{
              value{
                  name
              }
            }
            style {
              value {
                name
              }
            }
            container_style {
              value {
                name
              }
            }
            title {
              value
            }
            date {
              value
            }
          }
        }
      }
    }
    header_menu {
      linked_items {
        ... on kontent_item_application___menu {
          id
          elements {
            title {
              value
            }

            menu_item {
              linked_items {
                ... on kontent_item_application___pages {
                  id
                  elements {
                    url_slug {
                      value
                    }
                    menu_title {
                      value
                    }
                    menu_style{
                      value {
                        name
                      }
                    }
                    
                  }
                }
                ... on kontent_item_application___menu {
                  id
                  elements {
                    title {
                      value
                    }
                    menu_item {
                      linked_items {
                        ... on kontent_item_application___pages {
                          id
                          elements {
                            url_slug {
                              value
                            }
                            menu_title {
                              value
                            }
                            menu_style {
                              value {
                                name
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            promoted_content {
              linked_items {
                ... on kontent_item_application___content {
                  id
                  elements {
                    width_tablet {
                      value {
                        codename
                      }
                    }
                    width_mobile {
                      value {
                        codename
                      }
                    }
                    title {
                      value
                    }
                    sub_title {
                      value
                    }
                    style {
                      value {
                        codename
                      }
                    }
                    width_desktop {
                      value {
                        codename
                      }
                    }
                    content {
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    footer_menu {
      linked_items {
        ... on kontent_item_application___menu {
          id
          elements {
            title {
              value
            }

            menu_item {
              linked_items {
                ... on kontent_item_application___pages {
                  id
                  elements {
                    url_slug {
                      value
                    }
                    menu_title {
                      value
                    }
                  }
                }
                ... on kontent_item_application___menu {
                  id
                  elements {
                    title {
                      value
                    }
                    menu_item {
                      linked_items {
                        ... on kontent_item_application___pages {
                          id
                          elements {
                            url_slug {
                              value
                            }
                            menu_title {
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            promoted_content {
              linked_items {
                ... on kontent_item_application___content {
                  id
                  id
                  elements {
                    title {
                      value
                    }
                    sub_title {
                      value
                    }
                    content {
                      value
                    }
                    image {
                      value {
                        url
                        height
                        description
                        name
                        width
                        size
                      }
                    }
                    style {
                      value {
                        name
                        codename
                      }
                    }
                    vertical_align {
                      value {
                        name
                        codename
                      }
                    }
                    width_desktop {
                      value {
                        name
                      }
                    }
                    width_mobile {
                      value {
                        name
                      }
                    }
                    width_tablet {
                      value {
                        name
                      }
                    }
                    widgets {
                      ...WidgetFragment
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    sections {
      linked_items {
        id
        ... on kontent_item_application___section {
          ...SectionFragment
        }
      }
    }
  }
`

export const SpeakerFragment = graphql`
  fragment SpeakerFragment on Airtable {
    id
    data {
      Speaker_First
      Speaker_Last
      Speaker_Job_Title
      Speaker_Company
      Speaker_Bio
      Speaker_Linkedin
      Speaker_Twitter
      Speaker_Instagram
      Speaker_Facebook
      Ghost_Id
      Speaker_Company_Logo {
        url,
        thumbnails {
          full {
            url,
            width,
            height
          },
          large {
            url,
            width,
            height
          },
          small {
            url,
            width,
            height
          }
        }
      },
      Speaker_Profile_Picture {
        localFiles {
          childImageSharp {
            fluid(maxWidth: 230, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
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
      Speaker_Header_Image {
        url,
        thumbnails {
          full {
            url,
            width,
            height
          },
          large {
            url,
            width,
            height
          },
          small {
            url,
            width,
            height
          }
        }
      }
      Speaker_Priority
      speaker_url_slug
      Highlight {
        data {
          Highlight_Name
        }
      }
      Conference {
        data {
          Conference_Id
          Type
          Location
          Year
        }
      }
      Sessions {
        ...SessionFragment
      }
    }
  }
`

export const AgendaFragment = graphql`
  fragment AgendaFragment on Airtable {
    id
    data {
      Session {
        ...SessionFragment
      }
      Agenda_Session_Duration
      Agenda_Session_Start_Time
      Agenda_Session_End_Time
      Stage {
        data {
          Stage_Name
          Stage_Type
          Stage_Priority
          Stage_Colour
        }
      }
      Conference {
        data {
          Conference_Id
          Type
          Location
          Year
        }
      }
    }
  }
`

export const SessionFragment = graphql`
  fragment SessionFragment on Airtable {
    id
    data {
      Talk_Title
      Talk_Description
      Stream {
        data {
          Stream_Name
          Stream_Description
        }
      }
      Session_Type
      Session_Status
      Session_Priority
      Highlight {
        id
        data {
          Highlight_Name
          Highlight_Category
        }
      }
      Speakers {
        id
        data {
          Speaker_First
          Speaker_Last
          Speaker_Job_Title
          Speaker_Company
          Speaker_Bio
          Speaker_Linkedin
          Speaker_Twitter
          Speaker_Company_Logo {
            url,
            thumbnails {
              full {
                url,
                width,
                height
              },
              large {
                url,
                width,
                height
              },
              small {
                url,
                width,
                height
              }
            }
          }
          Speaker_Profile_Picture {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 230, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          Speaker_Priority
          speaker_url_slug
          Highlight {
            data {
              Highlight_Name
            }
          }
          Conference {
            data {
              Conference_Id
              Type
              Location
              Year
            }
          }
        }
      }
      Video
      Video_Description
      Video_Image {
        localFiles {
          childImageSharp {
            fixed(width: 355, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
      Slideshare
      Agenda {
        data {
          Conference {
            data {
              Conference_Id
              Type
              Location
              Year
            }
          }
          Agenda_Session_Start_Time
          Agenda_Session_End_Time
        }
      }
    }
  }
`

export const WidgetFragment = graphql`
  fragment WidgetFragment on KontentModularContentElement {
    linked_items {
      ... on kontent_item_widget___author {
        id
        internal{
          type
        }
        elements {
          name {
            value
          }
          job_title {
            value
          }
          company {
            value
          }
        }
      }
      ... on kontent_item_widget___card {
        id
        internal{
          type
        }
        elements {
          title {
            value
          }
          sub_title {
            value
          }
          content {
            value
          }
          image {
            value {
              url
              width
              height
              name
              type
              description
              fixed(width: 400) {
                ...KontentAssetFixed
              }
            }
          }
          background_color {
            value
          }
        }
      }
      ... on kontent_item_widget___tab {
        id
        internal{
          type
        }
        elements {
          tab_name {
            value
          }
          widgets {
            linked_items {
              ... on kontent_item_widget___card {
                id
                internal{
                  type
                }
                elements {
                  title {
                    value
                  }
                  sub_title {
                    value
                  }
                  content {
                    value
                  }
                  image {
                    value {
                      url
                      width
                      height
                      name
                      type
                      description
                      fixed(width: 400) {
                        ...KontentAssetFixed
                      }
                    }
                  }
                  background_color {
                    value
                  }
                  style {
                    value {
                      codename
                    }
                  }
                }
              }
            }
          }
        }
      }
      ... on kontent_item_widget___button {
        id
        internal{
          type
        }
        elements {
          text {
            value
          }
          style {
            value {
              codename
            }
          }
          page {
            linked_items {
              ... on kontent_item_application___pages {
                id
                elements {
                  url_slug {
                    value
                  }
                }
              }
            }
          }
          url_link {
            value
          }
        }
      }
      ... on kontent_item_widget___card_header {
        id
        internal{
          type
        }
        elements {
          title___1 {
            value
          }
          title___2 {
            value
          }
        }
      }
      ... on kontent_item_application___data {
        id,
        elements {
          conference {
            value
          }
          highlight {
            value
          }
          data_type{
            value{
                name
            }
          }
          style {
            value {
              name
            }
          }
          container_style {
            value {
              name
            }
          }
          title {
            value
          }
          date {
            value
          }
        }
      }
      ... on kontent_item_widget___form {
        id
        internal{
          type
        }
        elements {
          button_text {
            value
          }
          form_type {
            value {
              codename
            }
          }
          form_name {
            value
          }
          button_text {
            value
          }
          theme {
            value {
              name
            }
          }
        }
      }
      ... on kontent_item_widget___map {
        id
        internal{
          type
        }
        elements {
          latitude {
            value
          }
          longitude {
            value
          }
          zoom {
            value
          }
        }
      }
      ... on kontent_item_widget___project_to_product {
        id,
        elements {
          direction {
            value {
              codename
            }
          }
          content {
            value
          }
          image {
            value {
              url
              description
              height
              width
            }
          }
          title {
            value
          }
        }
      }
      ... on kontent_item_widget___social_link {
        id
        internal{
          type
        }
        elements {
          network {
            value
          }
          url {
            value
          }
          icon {
            value {
              url
              width
              height
              name
              description
            }
          }
        }
      }
      ... on kontent_item_widget___stats {
        id
        internal{
          type
        }
        elements {
          metric {
            value
          }
          item {
            value
          }
          format {
            value {
              codename
            }
          }
        }
      }
      ... on kontent_item_widget___ticket_purchase {
        id
        internal{
          type
        }
        elements {
          conference_id {
            value
          }
          releases {
            value
          }
        }
      }
      ... on kontent_item_widget___video {
        id
        internal{
          type
        }
        elements {
          title {
            value
          }
          description {
            value
          }
          url {
            value
          }
          image {
            value {
              url
              width
              height
              name
              description
              fluid(maxWidth: 1920) {
                ...KontentAssetFluid
              }
            }
          }
        }
      }
    }
  }
`

export const SectionFragment = graphql`
  fragment SectionFragment on kontent_item_application___section {
    id
    elements {
      title {
        value
      }
      sub_title {
        value
      }
      backgroundcolor {
        value {
          name
        }
      }
      fontcolor {
        value {
          name
        }
      }
      overlaytopbackgroundcolor {
        value {
          name
        }
      }
      background_image {
        value {
          url
           fluid(maxWidth: 1920) {
             ...KontentAssetFluid
           }
        }
      }
      full_width {
        value {
          codename
        }
      }
      spacing {
        value {
          codename
        }
      }
      overlay {
        value {
          codename
        }
      }
      align {
        value {
          codename
        }
      }
      margins {
        value {
          codename
        }
      }
      min_height {
        value {
          codename
        }
      }
      columns {
        linked_items {
          ... on kontent_item_application___content {
            id
            elements {
              title {
                value
              }
              sub_title {
                value
              }
              content {
                value
              }
              image {
                value {
                  url
                  height
                  description
                  name
                  width
                  size
                  # fluid(maxWidth: 600) {
                  #   ...KontentAssetFluid
                  # }
                }
              }
              style {
                value {
                  name
                  codename
                }
              }
              vertical_align {
                value {
                  name
                  codename
                }
              }
              backgroundcolor {
                value {
                  name
                }
              }
              title_colour {
                value
              }
              text_align {
                value {
                  name
                  codename
                }
              }
              width_desktop {
                value {
                  name
                }
              }
              width_mobile {
                value {
                  name
                }
              }
              width_tablet {
                value {
                  name
                }
              }
              widgets {
                ...WidgetFragment
              }
            }
          }
        }
      }
    }
  }
`
