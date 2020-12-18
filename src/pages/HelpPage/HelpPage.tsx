import {Container, Typography} from '@material-ui/core'
import {Route} from '../../types/Route/Route'

export const HelpPage: Route = () => {
	return (
		<Container>
			<Typography variant='h3'>
				Hello From Help Page!
			</Typography>
		</Container>
	)
}
HelpPage.routeName = '/help'
HelpPage.displayName = 'Help'
HelpPage.icon = 'help'