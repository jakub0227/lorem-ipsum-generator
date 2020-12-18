import React, {Dispatch, FC, SetStateAction, useState} from 'react'
import {
	Button,
	ButtonGroup,
	Container,
	Grid,
	Grow,
	Input,
	InputLabel,
	Paper,
	Slider,
	Tooltip,
	Typography,
	useTheme,
} from '@material-ui/core'
import {css} from '@emotion/react'
import useClippy from 'use-clippy'
import loremIpsum from '../../../loremIpsum.json'

function ValueLabelComponent(props: {
	children: React.ReactElement;
	open: boolean;
	value: number;
}) {
	const {children, open, value} = props
	
	return (
		<Tooltip open={open} enterTouchDelay={0} placement='top' title={value}>
			{children}
		</Tooltip>
	)
}

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
		button: css`
          margin: ${theme.spacing(1.5)}px
		`,
		buttonGroup: css`
          margin: ${theme.spacing(1.5)}px
		`,
	}
	
	const [words, setWords] = useState(0)
	const [letters, setLetters] = useState(0)
	const [_, setClipboard] = useClippy()
	
	const createArrayLoopingToN = <T extends any>(arr: T[], n: number): T[] => {
		const arrCopy = [...arr]
		for (let i = 0; i < n; i++) {
			if (!arrCopy[i]) {
				arrCopy.push(arr[i % arr.length])
			}
		}
		return arrCopy
	}
	
	const handleCopyClick = () => {
		if (wordsOrLetters) {
			const loremWords = createArrayLoopingToN(loremIpsum.split(' '), words)
			
			const loremWordsExpected = loremWords.slice(0, words)
			setClipboard(loremWordsExpected.join(' '))
		} else {
			const loremLetters = createArrayLoopingToN(loremIpsum.split(''), letters)
			
			const loremLettersExpected = loremLetters.slice(0, letters)
			setClipboard(loremLettersExpected.join(''))
		}
	}
	
	type SliderDataType = {
		name: string
		unit: string
		min: number
		max: number
		value: number
		setValue: Dispatch<SetStateAction<number>>
	}
	const wordsSliderData: SliderDataType = {
		name: 'Words',
		unit: 'words',
		min: 0,
		max: 500,
		value: words,
		setValue: setWords,
	}
	const lettersSliderData: SliderDataType = {
		name: 'Letters',
		unit: 'letters',
		min: 0,
		max: 3000,
		value: letters,
		setValue: setLetters,
	}
	
	const [wordsOrLetters, setWordsOrLetters] = useState(true)
	
	const toggleWordsOrLetters = () => {
		setWordsOrLetters((prev) => !prev)
	}
	
	const {max, min, name, unit, value, setValue} = wordsOrLetters ? wordsSliderData : lettersSliderData
	return (
		<Grow enter in timeout={1000}>
			<Container css={styles.root}>
				<Paper css={styles.content} elevation={6}>
					<ButtonGroup css={styles.buttonGroup} variant='contained' color='primary'>
						<Button disabled={wordsOrLetters} onClick={toggleWordsOrLetters}>Words</Button>
						<Button disabled={!wordsOrLetters} onClick={toggleWordsOrLetters}>Letters</Button>
					</ButtonGroup>
					<div key={name}>
						<Typography variant='h6'>{name}</Typography>
						<Grid container direction='row' alignItems='center' justify='center' spacing={2}
						      css={styles.slidersGrid}>
							{[
								<Grid item>
									<Slider
										css={styles.slider}
										value={value}
										ValueLabelComponent={ValueLabelComponent}
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
					<Button color='secondary' onClick={handleCopyClick} css={styles.button} variant='contained'>Copy to
						clipboard</Button>
				</Paper>
			</Container>
		</Grow>
	)
}