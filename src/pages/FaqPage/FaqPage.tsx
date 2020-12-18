import {Container, Typography} from '@material-ui/core'
import {Route} from '../../types/Route/Route'

export const FaqPage: Route = () => {
	return (
		<Container>
			<Typography variant='h3'>
				Hello From FAQ!
			</Typography>
		</Container>
	)
}

FaqPage.displayName = 'FAQ'
FaqPage.routeName = '/faq'
FaqPage.icon = 'question_answer'