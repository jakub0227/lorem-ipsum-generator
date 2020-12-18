import {Container, Typography} from '@material-ui/core'
import {Route} from '../../types/Route/Route'

export const LoremPage: Route = () => {
	
	return (
		<Container>
			<Typography variant='h5'>Lorem Ipsum Generator:</Typography>
		</Container>
	)
}
LoremPage.routeName = '/lorem'
LoremPage.displayName = 'Generate'
LoremPage.icon = 'speaker_notes'