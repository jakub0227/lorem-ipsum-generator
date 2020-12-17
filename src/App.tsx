import {FC} from 'react'
import {StylesProvider, Typography} from '@material-ui/core'
import {Layout} from './hoc/Layout/Layout'
import {Theme} from './hoc/Theme/Theme'

export const App: FC = () => {
	
	return (
		<div>
			<StylesProvider injectFirst>
				<Theme>
					<Layout>
						<Typography variant='h1'>
							Hello World!
						</Typography>
					</Layout>
				</Theme>
			</StylesProvider>
		</div>
	)
}
