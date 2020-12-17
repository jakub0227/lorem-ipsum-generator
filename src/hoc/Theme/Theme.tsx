import React, {FC} from 'react'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import * as colors from '@material-ui/core/colors'
import {css, SerializedStyles} from '@emotion/react'

declare module '@material-ui/core/styles/createMuiTheme' {
	interface Theme {
		customMixins: {
			flexCentered: SerializedStyles,
		}
	}
	
	interface ThemeOptions extends Theme {
	}
}

export const Theme: FC = (props) => {
	
	return (
		<ThemeProvider theme={createMuiTheme({
			palette: {
				type: 'dark',
				primary: colors.deepPurple,
				secondary: colors.lightGreen,
			},
			props: {
				MuiAppBar: {
					variant: 'elevation',
					elevation: 5,
				},
				MuiTypography: {
					gutterBottom: true,
				},
			},
			customMixins: {
				flexCentered: css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
				`,
			},
		})}>
			{props.children}
		</ThemeProvider>
	)
}