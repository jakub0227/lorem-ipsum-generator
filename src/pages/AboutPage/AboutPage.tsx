import {css} from '@emotion/react'
import {Container, Typography, useTheme, Zoom} from '@material-ui/core'
import {Route} from '../../types/Route/Route'
import {AboutPageItems} from './AboutPageItems/AboutPageItems'

export const AboutPage: Route = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: space-between;
          margin-top: ${theme.spacing(10)} px;
          padding: ${theme.spacing(2)}px
		`,
		welcome: css`
          margin-top: ${theme.spacing(5)}px;
          margin-bottom: ${theme.spacing(5)}px;
          text-align: center;
          max-width: 1100px;
          object-fit: cover;
		`,
	}
	return (
		<Container maxWidth='md' css={styles.root}>
			<Zoom in timeout={1000}>
				<Typography variant='h4'>About App:</Typography>
			</Zoom>
			<Zoom in timeout={1000}>
				<Container css={styles.welcome}>
					<AboutPageItems/>
				</Container>
			</Zoom>
		</Container>
	)
}

AboutPage.routeName = '/about'
AboutPage.displayName = 'About'
AboutPage.icon = 'info'