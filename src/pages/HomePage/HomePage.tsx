import {Button, Container, Grow, Typography, useTheme, Zoom} from '@material-ui/core'
import {Route} from '../../types/Route/Route'
import lorem from '../../assets/Images/lorem.png'
import {css} from '@emotion/react'
import {Link} from 'react-router-dom'

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
			<Zoom in timeout={2500}>
				<Typography variant='h5'>Generate Lorem Ipsum:</Typography>
			</Zoom>
			<Grow enter in timeout={3000}>
				<Button
					component={Link}
					to='/lorem'
					css={styles.button}>
					<img css={styles.picture} src={lorem} alt='lorem'/>
				</Button>
			</Grow>
		</Container>
	)
}

HomePage.routeName = '/'
HomePage.displayName = 'Home'
HomePage.icon = 'home'
