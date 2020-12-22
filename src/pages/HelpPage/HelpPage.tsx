import {css} from '@emotion/react'
import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Step,
	StepLabel,
	Stepper,
	Typography,
	useTheme,
	Zoom,
} from '@material-ui/core'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Route} from '../../types/Route/Route'

export const HelpPage: Route = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          width: 600px;
		`,
		backButton: css`
          margin-right: ${theme.spacing(1)} px;
          background-color: #12c2e9;
          opacity: 90%
		`,
		instructions: css`
          margin-top: ${theme.spacing(3)} px;
          margin-bottom: ${theme.spacing(1)} px;
		`,
	}
	
	const [activeStep, setActiveStep] = useState(0)
	const getSteps = () => {
		return ['Generate Lorem Ipsum...', 'By Words or Letters...', 'Click and copy to clipboard !']
	}
	const steps = getSteps()
	const getStepContent = (stepIndex: number) => {
		switch (stepIndex) {
			case 0:
				return 'Having problems with finding text to your web-design?'
			case 1:
				return 'Choose how much text you want to generate'
			case 2:
				return 'Now you can have it in your web-design!'
			default:
				return 'Unknown stepIndex'
		}
	}
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}
	
	return (
		<Zoom in timeout={1000}>
			<Container css={styles.root}>
				<Stepper activeStep={activeStep} alternativeLabel>
					{steps.map((label) => (
						<Step color='contained' key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<div>
					<Box>
						<Typography gutterBottom variant='h6'
						            css={styles.instructions}>{getStepContent(activeStep)}</Typography>
						<ButtonGroup>
							<Button
								variant='contained'
								disabled={activeStep === 0}
								onClick={handleBack}
								css={styles.backButton}
							>
								Back
							</Button>
							{activeStep === steps.length - 1 ?
								(<Button variant='contained'
								         color='primary'
								         component={Link}
								         to={'/'}>
										Proceed
									</Button>
								) : (
									<Button variant='contained'
									        color='primary'
									        onClick={handleNext}>
										Next
									</Button>
								)}
						</ButtonGroup>
					</Box>
				</div>
			</Container>
		</Zoom>
	
	)
}
HelpPage.routeName = '/help'
HelpPage.displayName = 'Help'
HelpPage.icon = 'help'