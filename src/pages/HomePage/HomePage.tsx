import {Container, Typography, useTheme, Zoom} from '@material-ui/core'
import {Route} from '../../types/Route/Route'
import {css} from '@emotion/react'
import {LoremPageGenerator} from '../LoremPage/LoremPageGenerator/LoremPageGenerator'

export const HomePage: Route = () => {
	const theme = useTheme()
	const styles = {
		button: css`
          width: 400px;
          height: 400px;
          margin: ${theme.spacing(2)}px;
          border-radius: 35px;
		`,
		picture: css`
          object-fit: cover;
          width: 400px;
          height: 400px;
          border-radius: 35px;
		`,
	}
	// Design rework ! ma być UX friendly + responsive layout
	// Generujemy Ipsum na 2 sposoby - na ilosc WORDS lub Letters
	// Slidery zintegrowane z txtfieldami 1 na Words - drugi na Letters
	// Przycisk COPY to dla UX + snackbar positive
	// Error handling (brak copy = cośtam)
	// Atrapa Strony z Accordions (HELP section, np dluzsze tutoriale  Steppery z Accordions, obrazki, duzy content, z głupotami)
	// About Page taki klasyk Legal + text
	// FAQ (random costam txt)
	// Linki z MUI (component Link)
	// Support US Donate (wiszacy action button kolorowy!)
	
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
