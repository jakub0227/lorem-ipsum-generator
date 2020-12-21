import {css} from '@emotion/react'
import {FC} from 'react'
import {CssBaseline, Fab, Paper, useTheme, Zoom} from '@material-ui/core'
import {Footer} from './Footer/Footer'
import {Navigation} from './Navigation/Navigation'

export const Layout: FC = (props) => {
	const theme = useTheme()
	const styles = {
		root: css`
          min-height: 100vh;
          display: flex;
          flex-direction: column;
		`,
		page: css`
          width: 100%;
          ${theme.customMixins.flexCentered};
          text-align: center;
          flex: 1;
          background: url("https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80");
          background-size: cover;
		`,
		fab: css`
          background: linear-gradient(135deg, #12c2e9 15%, #f64f59 70%);
          color: #fff;
          margin-left: 3px;
		`,
	}
	
	return (
		<Paper square elevation={0} css={styles.root}>
			<CssBaseline/>
			<Navigation/>
			<Paper css={styles.page}>
				<Zoom in timeout={1000}>
					<Fab href='https://www.youtube.com/watch?v=E8gmARGvPlI&ab_channel=WhamVEVO'
					     css={styles.fab} variant='extended'>Donate us!</Fab>
				</Zoom>
				{props.children}
			</Paper>
			<Footer/>
		</Paper>
	)
}