import {Container, Typography} from '@material-ui/core'
import {Route} from '../../types/Route/Route'

export const AboutPage: Route = () => {
	return (
		<Container>
			<Typography variant='h3'>
				Hello From About Us !
			</Typography>
		</Container>
	)
}

AboutPage.routeName = '/about'
AboutPage.displayName = 'About'
AboutPage.icon = 'info'