import React, {Dispatch, FC, SetStateAction, useState} from 'react'
import {Container, Grid, Input, InputLabel, Paper, Slider, Typography, useTheme} from '@material-ui/core'
import {css} from '@emotion/react'

export const LoremPageGenerator: FC = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          margin: ${theme.spacing(2)}px auto;
          padding: ${theme.spacing(2)}px;
          ${theme.customMixins.flexCentered};
          flex-direction: column;
		`,
		content: css`
          margin: ${theme.spacing(3)}px;
          padding: ${theme.spacing(2)}px
		`,
		slidersGrid: css`
          width: auto;
		`,
		slider: css`
          width: 200px;
		`,
	}
	
	const [words, setWords] = useState(0)
	const [letters, setLetters] = useState(0)
	
	const SLIDERS_DATA: {
		name: string
		unit: string
		min: number
		max: number
		value: number
		setValue: Dispatch<SetStateAction<number>>
	}[] = [
		{
			name: 'Words',
			unit: 'Number',
			min: 0,
			max: 200,
			value: words,
			setValue: setWords,
		},
		{
			name: 'Letters',
			unit: 'Number',
			min: 0,
			max: 3000,
			value: letters,
			setValue: setLetters,
		},
	]
	
	return (
		<Container css={styles.root}>
			<Paper css={styles.content} elevation={6}>
				{SLIDERS_DATA.map(({max, min, name, unit, value, setValue}) => (
					<div key={name}>
						<Typography variant='h6'>{name}</Typography>
						<Grid container direction='row' alignItems='center' justify='center' spacing={2}
						      css={styles.slidersGrid}>
							{[
								<Grid item>
									<Slider
										css={styles.slider}
										value={value}
										valueLabelFormat={(value) => `${value} ${unit}`}
										valueLabelDisplay='auto'
										min={min}
										max={max}
										color='primary'
										onChange={(_, val) => !Array.isArray(val) && setValue(val)}
									/>
									<InputLabel>{unit}</InputLabel>
									<Grid item><Input color='secondary' value={value}/></Grid>
								</Grid>,
							].map((el, i) => (
								<Grid item key={i}>
									{el}
								</Grid>
							))}
						</Grid>
					</div>
				))}
			</Paper>
		</Container>
	)
}