import {css} from '@emotion/react'
import {FC} from 'react'
import {GlobalStyle} from './GlobalStyle/GlobalStyle'
import {Paper, useTheme} from '@material-ui/core'
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
		`,
	}
	
	return (
		<Paper square elevation={0} css={styles.root}>
			<GlobalStyle/>
			<Navigation/>
			<Paper css={styles.page}>{props.children}</Paper>
			<Footer/>
		</Paper>
	
	)
}