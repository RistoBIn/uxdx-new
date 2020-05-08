import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Section from 'src/components/_sections'
import { NavContex } from 'src/_utils/contex'

const Body = ({ data }) => {
  const { mobileNavOpen } = useContext(
    NavContex
  )
  const sections = data.map(section => {
    if (section) return <Section key={section.id} data={section} />
  })
  return (
    <div style={{
      filter: mobileNavOpen ? 'blur(8px)' : 'none',
      overflowY: mobileNavOpen ? 'hidden' : 'none',
      transition: '0.2s filter linear'
    }}
    >
      {sections}
      {data.children}
    </div>
  )
}

Body.propTypes = {
  data: PropTypes.array.isRequired
}

export default Body
