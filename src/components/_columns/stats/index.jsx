import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import Widget from '../../_widgets'

import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
    ...commonStyles,
    [theme.breakpoints.down('md')]: mobileStyles,
    [theme.breakpoints.up('lg')]: desktopStyles
}))

const Stats = ({ title, subTitle, content, image, widgets }) => {
    const classes = useStyles()

    const widgetComponents = widgets.map((widget, index) => {
        return <Widget key={widget.id} data={widget} index={index} ThemeStyle="vertical" />
    })

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardInner}>
                <div className={classes.statsWrapper}>
                    {widgetComponents}
                    <div className={classes.borderLine}></div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Stats
