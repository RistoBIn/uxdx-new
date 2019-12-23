import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Hero from '../components/hero'
import Conference from '../components/conference'
import Product from '../components/product'
import Offer from "../components/offer"
import { Section } from "../components/section"
import Container from "../components/container"
import Button from "../components/button"

export const IndexPageTemplate = ({sections}) => {
  const speakerData = sections.linked_items[6]
  const recapData = sections.linked_items[7]
  return(
    <div>
      <Hero data={sections.linked_items[0]} />
      <Product data={sections.linked_items[2]} />
      <Offer data={sections.linked_items[3]} />
      <Conference data={sections.linked_items[5]} />
      <Section padding="7rem 0">
        <Container>
          <div className="text-center">
            <h2 dangerouslySetInnerHTML={{ __html: speakerData.elements.title.value }} />
          </div>
          <Button
            color="#000"
            bgColor="#fff"
            borderColor="#000"
            hoverColor="#fff"
            hoverBgColor="#000"
            dangerouslySetInnerHTML={{__html: speakerData.elements.columns.linked_items[1].elements.widgets.linked_items[0].elements.text.value}}
          />
          <Button
            color="#000"
            bgColor="#fff"
            borderColor="#000"
            hoverColor="#fff"
            hoverBgColor="#000"
            dangerouslySetInnerHTML={{__html: speakerData.elements.columns.linked_items[2].elements.widgets.linked_items[0].elements.text.value}}
          />
        </Container>
      </Section>
      <Section padding="7rem 0">
        <Container>
          <div className="text-center">
            <h2 dangerouslySetInnerHTML={{ __html: recapData.elements.title.value }} />
          </div>
        </Container>
      </Section>
      
    </div>
  )
}

const IndexPage = ({data}) => {
  const pageData = data.allKontentItemApplicationPages.nodes[0]
  const navData = pageData.elements.header_menu.linked_items[0].elements
  const sectionData = pageData.elements.sections

  return(
    <Layout 
      logoTitle = {pageData.elements.menu_title.value}
      menuItems = {navData}
    >
      <SEO 
        title={pageData.elements.meta_title.value} 
        description={pageData.elements.meta_description.value}
      />
      <IndexPageTemplate sections={sectionData} />
    </Layout>
  )
}

export default IndexPage

export const homePageQuery = graphql`{
  allKontentItemApplicationPages(filter: {fields: {slug: {eq: "home"}}}) {
    nodes {
      elements {
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
        show_in_sitemap {
          value {
            codename
          }
        }
        external_link {
          value
        }
        header_menu {
          linked_items {
            ... on KontentItemApplicationMenu {
              id
              elements {
                title {
                  value
                }

                menu_item {
                  linked_items {
                    ... on KontentItemApplicationPages {
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
                    ... on KontentItemApplicationMenu {
                      id
                      elements {
                        title {
                          value
                        }
                        menu_item {
                          linked_items {
                            ... on KontentItemApplicationPages {
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
                    ... on KontentItemApplicationContent {
                      id
                      elements {
                        width___tablet {
                          value {
                            codename
                          }
                        }
                        width___mobile {
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
                        full_width {
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
            ... on KontentItemApplicationMenu {
              id
              elements {
                title {
                  value
                }

                menu_item {
                  linked_items {
                    ... on KontentItemApplicationPages {
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
                    ... on KontentItemApplicationMenu {
                      id
                      elements {
                        title {
                          value
                        }
                        menu_item {
                          linked_items {
                            ... on KontentItemApplicationPages {
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
                    ... on KontentItemApplicationContent {
                      id
                      elements {
                        width___tablet {
                          value {
                            codename
                          }
                        }
                        width___mobile {
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
                        full_width {
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
        sections {
          linked_items {
            id
            ... on KontentItemApplicationSection {
              id
              elements {
                title {
                  value
                }
                sub_title {
                  value
                }
                background_color {
                  value
                }
                background_image {
                  value {
                    url
                  }
                }
                full_width {
                  value {
                    codename
                  }
                }
                columns {
                  linked_items {
                    ... on KontentItemApplicationContent {
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
                          }
                        }
                        full_width {
                          value {
                            name
                          }
                        }
                        width___mobile {
                          value {
                            name
                          }
                        }
                        width___tablet {
                          value {
                            name
                          }
                        }
                        widgets {
                          linked_items {
                            ... on KontentItemWidgetButton {
                              id
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
                                    ... on KontentItemApplicationPages {
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
                            ... on KontentItemWidgetCardHeader {
                              id
                              elements {
                                title___1 {
                                  value
                                }
                                title___2 {
                                  value
                                }
                              }
                            }
                            ... on KontentItemWidgetForm {
                              id
                              elements {
                                button_text {
                                  value
                                }
                                form_name {
                                  value {
                                    codename
                                  }
                                }
                              }
                            }
                            ... on KontentItemWidgetMap {
                              id
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
                            ... on KontentItemWidgetVideo {
                              id
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
              }
            }
          }
        }
      }
    }
  }

}`

