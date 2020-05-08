import React from 'react'
import classNames from 'classnames'
import { cleanText } from 'src/_utils'
import useNavbar from 'src/components/_core/NavBar/utils/useNavbar'
import LogoWhite from 'src/images/logo-white.svg'
import Logo from 'src/images/logo.svg'
import Button from 'src/components/_widgets/Button'

export default function NavBarDesktopView ({
  classes,
  menuItems,
  promotedContentData
}) {
  const { isScrolled, navBarRef } = useNavbar()

  const menuItemsComp = menuItems.map(item => {
    const style = item.style.toLowerCase()
    let component
    switch (style) {
      case 'primary':
      case 'secondary' :
        component = (
          <li className={classes.menuItemButton} key={item.url}>
            <Button
              size='small'
              style={style}
              className={classes.button}
              href={`/${item.url}`}
              text={cleanText(item.title)}
            />
          </li>
        )
        break
      case 'titobutton':
        component = (
          <li className={classes.menuItemButton} key='1'>
            <tito-button event={item.conference} releases={item.releases} />
          </li>
        )
        break
      default:
        component = (
          <li className={classes.menuItem} key={item.url}>
            <a className={classes.menuLink} href={`/${item.url}`}>
              {cleanText(item.title)}
            </a>
          </li>
        )
    }
    // return style && (style === 'primary' || style === 'secondary') ? (
    //   <li className={classes.menuItemButton} key={item.url}>
    //     <Button
    //       size='small'
    //       style={style}
    //       className={classes.button}
    //       href={`/${item.url}`}
    //       text={cleanText(item.title)}
    //     />
    //   </li>
    // ) : (
    //   <li className={classes.menuItem} key={item.url}>
    //     <a className={classes.menuLink} href={`/${item.url}`}>
    //       {cleanText(item.title)}
    //     </a>
    //   </li>
    // )
    return component
  })

  return (
    <nav
      id='navbar'
      className={classNames(classes.root, isScrolled && classes.scrolled)}
      ref={navBarRef}
    >
      <div className={classes.content}>
        <div className={classes.leftMenu}>
          <a href='/'>
            <img
              className={isScrolled ? classes.logoScrolled : classes.logo}
              src={isScrolled ? LogoWhite : Logo}
              alt='UXDX Logo'
            />
          </a>
          <div className={classNames(classes.promotedContent, isScrolled && classes.scrolledPromotedContent)}>
            <span className={classes.promotedContentTitle}>
              {cleanText(promotedContentData.title.value)}
            </span>
            <span className={classes.promotedContentSubtitle}>
              {cleanText(promotedContentData.subTitle.value)}
            </span>
          </div>
        </div>
        <div />
        <ul className={classes.menu}>
          {menuItemsComp}
          <li className={classes.menuItemButton} />
        </ul>
      </div>
    </nav>
  )
}
