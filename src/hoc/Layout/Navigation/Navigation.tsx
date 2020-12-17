import {css} from '@emotion/react'
import {FC} from 'react'
import {AppBar, Toolbar, Typography, useTheme} from '@material-ui/core'

export const Navigation: FC = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          margin-right: ${theme.spacing(4)} px;
          display: flex;
		`,
		toolBar: css`
          ${theme.customMixins.flexCentered};
		`,
		title: css`
          flex-grow: 1;
		`,
	}
	
	return (
		<AppBar css={styles.root} position='static' color='primary'>
			<Toolbar css={styles.toolBar}>
				<Typography css={styles.title} variant='h6'>Your Personal: APP Starter </Typography>
			</Toolbar>
		</AppBar>
	)
}
