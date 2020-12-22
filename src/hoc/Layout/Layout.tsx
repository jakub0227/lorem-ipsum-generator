import {css} from '@emotion/react'
import {FC} from 'react'
import {Chip, CssBaseline, Icon, Paper, useTheme, Zoom} from '@material-ui/core'
import {Footer} from './Footer/Footer'
import {Navigation} from './Navigation/Navigation'
import {Link} from 'react-router-dom'

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
		chip: css`
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
					<Chip
						css={styles.chip}
						variant='default'
						size='medium'
						icon={<Icon>sentiment_very_satisfied</Icon>}
						label='Donate us please!'
						clickable
						color='primary'
						component={Link}
						to={'/'}
					/>
				</Zoom>
				{props.children}
			</Paper>
			<Footer/>
		</Paper>
	)
}