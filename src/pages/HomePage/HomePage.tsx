import {FC} from 'react'
import {Container, Typography} from '@material-ui/core'

export const HomePage: FC = () => {
	return (
		<Container>
			<Typography variant='h1'>
				Hello From HomePage!
			</Typography>
		</Container>
	)
}