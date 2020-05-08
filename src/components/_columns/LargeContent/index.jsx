import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'

import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
    ...commonStyles,
    [theme.breakpoints.up('lg')]: desktopStyles,
    [theme.breakpoints.down('xs')]: mobileStyles
}))

const LargeContent = ({ title, subTitle, content, image, widgets }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.content} component="div" dangerouslySetInnerHTML={{__html: content}}></Typography>
            </CardContent>
            <div className={classes.overlay}></div>
        </Card>
    )
}

export default LargeContent
