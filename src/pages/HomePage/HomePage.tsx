import {Container, Typography, useTheme} from '@material-ui/core'
import {Route} from '../../types/Route/Route'
import {css} from '@emotion/react'

export const HomePage: Route = () => {
	
	const theme = useTheme()
	const styles = {
		picture: css`
          margin: ${theme.spacing(3)}px auto;
          max-width: 80%;
          max-height: 250px;
          border-radius: 30px;
          border-style: solid;
          border-color: #c3802a;
          object-fit: cover;
          z-index: 10;
		`,
	}
	
	return (
		<Container>
			<Typography variant='h1'>
				Hello From HomePage!
			</Typography>
		</Container>
	)
}

HomePage.routeName = '/'
HomePage.displayName = 'Home'
HomePage.icon = 'home'
