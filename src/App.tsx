import {FC} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {StylesProvider, Typography} from '@material-ui/core'
import {Layout} from './hoc/Layout/Layout'
import {Theme} from './hoc/Theme/Theme'
import {routeList} from './hoc/Layout/Navigation/NavigationItems/routeList'
import {SnackbarProvider} from 'notistack'

export const App: FC = () => {
	
	return (
		<BrowserRouter>
			<SnackbarProvider maxSnack={3} autoHideDuration={4000}>
				<StylesProvider injectFirst>
					<Theme>
						<Layout>
							<Switch>
								<Route>
									{routeList.map(route => (
										<Route exact path={route.routeName} component={route}/>
									))}
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
			</SnackbarProvider>
		</BrowserRouter>
	)
}
