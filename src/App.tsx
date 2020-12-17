import {FC} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {StylesProvider, Typography} from '@material-ui/core'
import {Layout} from './hoc/Layout/Layout'
import {Theme} from './hoc/Theme/Theme'
import {HomePage} from './pages/HomePage/HomePage'

export const App: FC = () => {
	
	return (
		<BrowserRouter>
			<StylesProvider injectFirst>
				<Theme>
					<Layout>
						<Switch>
							<Route exact path='/'>
								<HomePage/>
							</Route>
							<Route>
								<Typography variant='h1'>
									404 Not Found
								</Typography>
							</Route>
						</Switch>
					</Layout>
				</Theme>
			</StylesProvider>
		</BrowserRouter>
	)
}
