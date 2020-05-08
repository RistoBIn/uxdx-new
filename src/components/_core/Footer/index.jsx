import React from 'react'
import classNames from 'classnames'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import Logo from 'src/images/logo.svg'
import { Link } from 'gatsby'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

export default function Footer ({ data }) {
  const footerContentMenus = data[0].elements.menu_item.linked_items
  const footerSocialIcons = data[0].elements.promoted_content.linked_items[0].elements.widgets.linked_items
  const classes = useStyles()

  const year = new Date().getFullYear()

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={2}>
            <div className={classes.logoContainer}>
              <a href='/'>
                <img className={classes.logo} src={Logo} alt='UXDX' />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9} xl={10}>
            <div className={classes.socialIcons}>
              {footerSocialIcons.map((icon) => (
                <a href={icon.elements.url.value} target='_blank' rel='noopener noreferrer' key={icon.elements.network.value}>
                  <img src={icon.elements.icon.value[0].url} alt={icon.elements.network.value} />
                </a>
              ))}
            </div>
            <div className={classes.menuContainer}>
              {footerContentMenus.map((menuItem, i) => (
                <ul
                  key={`menu-${menuItem.id}-${i}`}
                  className={classNames(classes.menu)}
                >
                  <li className={classes.menuHeader} dangerouslySetInnerHTML={{ __html: menuItem.elements.title.value }} />
                  {menuItem.elements.menu_item.linked_items.map(childItem => (
                    <li key={`menu-${childItem.id}-${i}`} className={classes.menuItem}>
                      {/* <a  href={childItem.elements.url_slug.value} dangerouslySetInnerHTML={{ __html: childItem.elements.menu_title.value }}>
                      </a> */}
                      <Link to={`/${childItem.elements.url_slug.value}`} className={classes.link} dangerouslySetInnerHTML={{ __html: childItem.elements.menu_title.value }} />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </Grid>
        </Grid>
        <div className={classes.legals}>
          <ul>
            <li>Copyright Socially Motivated Ltd {year}.</li>
            <li><Link to='/code-of-conduct'>Code of Conduct</Link></li>
            <li><Link to='/ticket-terms'>Terms and Conditions</Link></li>
            <li><Link to='/privacy'>Privacy Policy</Link></li>
            <li><Link to='/cookie-policy'>Cookie Policy</Link></li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
