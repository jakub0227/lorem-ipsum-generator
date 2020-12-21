import {Container, Typography, Zoom} from '@material-ui/core'
import {Route} from '../../types/Route/Route'

import {LoremPageGenerator} from './LoremPageGenerator/LoremPageGenerator'

export const HomePage: Route = () => {
	
	// Atrapa Strony z Accordions (HELP section, np dluzsze tutoriale  Steppery z Accordions, obrazki, duzy content, z głupotami)
	
	// FAQ (random costam txt)
	
	// Linki z MUI (component Link)
	
	return (
		<Container>
			<Zoom in timeout={1000}>
				<Typography variant='h2'>
					Welcome designers!
				</Typography>
			</Zoom>
			<Zoom in timeout={1500}>
				<Typography variant='h5'>Generate Lorem Ipsum:</Typography>
			</Zoom>
			<LoremPageGenerator/>
		</Container>
	)
}

HomePage.routeName = '/'
HomePage.displayName = 'Home'
HomePage.icon = 'home'
