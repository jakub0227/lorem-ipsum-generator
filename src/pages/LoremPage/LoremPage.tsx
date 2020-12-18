import {Container, Typography} from '@material-ui/core'
import {Route} from '../../types/Route/Route'
import {LoremPageGenerator} from './LoremPageGenerator/LoremPageGenerator'

export const LoremPage: Route = () => {
	
	return (
		<Container>
			<Typography variant='h5'>Lorem Ipsum Generator:</Typography>
			<LoremPageGenerator/>
		</Container>
	)
}
LoremPage.routeName = '/lorem'
LoremPage.displayName = 'Generate'
LoremPage.icon = 'speaker_notes'