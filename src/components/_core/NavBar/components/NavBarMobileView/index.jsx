import React, { useContext } from 'react'
import classNames from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ClearIcon from '@material-ui/icons/Clear'
import { cleanText } from 'src/_utils'
import { NavContex } from 'src/_utils/contex'

import Button from 'src/components/_widgets/Button'
import useNavbar from 'src/components/_core/NavBar/utils/useNavbar'

import LogoWhite from 'src/images/logo-white.svg'
import Logo from 'src/images/logo.svg'

export default function NavBarMobileView ({
  classes,
  menuItems,
  promotedContentData
}) {
  const { mobileNavOpen, toggleMobileNav } = useContext(NavContex)

  const { isScrolled, navBarRef } = useNavbar()

  const menuItemsList = []
  let menuButton = null

  menuItems.forEach(item => {
    const style = item.style.toLowerCase()

    switch (style) {
      case 'primary':
      case 'secondary' :
        menuButton = (
          <span className={classes.menuItemButton} key={item.url}>
            <Button
              size='small'
              style={style}
              className={classes.button}
              href={`/${item.url}`}
              text={cleanText(item.title)}
            />
          </span>
        )
        break
      case 'titobutton':
        menuButton = (
          <tito-button event={item.conference} releases={item.releases} key='1' className={classes.menuItemButton} />
        )
        break
      default:
        menuItemsList.push(
          <li className={classes.menuItem} key={item.url}>
            <a className={classes.menuLink} href={`/${item.url}`}>
              {cleanText(item.title)}
            </a>
          </li>
        )
    }

  //   if (style && (style === 'primary' || style === 'secondary')) {
  //     menuButton = (
  //       <span className={classes.menuItemButton} key={item.url}>
  //         <Button
  //           size='small'
  //           variant={style}
  //           className={classes.button}
  //           href={`/${item.url}`}
  //           text={cleanText(item.title)}
  //         />
  //       </span>
  //     )
  //   } else {
  //     menuItemsList.push(
  //       <li className={classes.menuItem} key={item.url}>
  //         <a className={classes.menuLink} href={`/${item.url}`}>
  //           {cleanText(item.title)}
  //         </a>
  //       </li>
  //     )
  //   }
  })

  return (
    <>
      {mobileNavOpen ? (
        <div className={classes.openedContainer}>
          <div className={classes.closeIcon}>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              onClick={() => toggleMobileNav()}
            >
              <ClearIcon />
            </IconButton>
          </div>
          <ul className={classes.menu}>{menuItemsList}</ul>
          <div className={classes.promotedContent}>
            {/* // TODO: Remove this hardcoding */}
            {/* <span className={classes.title}>UXDX Conference 2020</span> */}
            <span className={classes.description}>
              {cleanText(promotedContentData.title.value)}
            </span>
            <span className={classes.description}>
              {cleanText(promotedContentData.subTitle.value)}
            </span>
          </div>
        </div>
      ) : (
        <nav
          id='navbar'
          className={classNames(classes.root, isScrolled && classes.scrolled)}
          ref={navBarRef}
        >
          <div
            className={isScrolled ? classes.contentScrolled : classes.content}
          >
            <a href='/'>
              <img
                className={isScrolled ? classes.logoScrolled : classes.logo}
                src={isScrolled ? LogoWhite : Logo}
                alt='UXDX Conference Logo'
              />
            </a>
            {menuButton}
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              onClick={() => toggleMobileNav()}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </nav>
      )}
    </>
  )
}
