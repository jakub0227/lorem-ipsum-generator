import {Container, Typography} from '@material-ui/core'
import {Route} from '../../types/Route/Route'

export const HomePage: Route = () => {
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
