import {Accordion, AccordionDetails, AccordionSummary, Container, Typography, useTheme, Zoom} from '@material-ui/core'
import React from 'react'
import {Route} from '../../types/Route/Route'
import {css} from '@emotion/react'

export const FaqPage: Route = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          margin: ${theme.spacing(2)}px auto;
          padding: ${theme.spacing(2)}px;
          ${theme.customMixins.flexCentered};
          flex-direction: column;
          text-align: left;
          width: 600px;
		`,
	}
	const [expanded, setExpanded] = React.useState<string | false>('panel1')
	const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false)
	}
	
	return (
		<Zoom in timeout={1000}>
			<Container css={styles.root}>
				<Typography variant='h3'>
					Top 3 FAQ:
				</Typography>
				<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
						<Typography>Q: Dicta dolor hic inventore laudantium ?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant='subtitle2'>
							A: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
							sit amet blandit leo lobortis eget. Accusamus accusantium aperiam delectus dicta dolor hic
							inventore laudantium, modi mollitia nam nobis optio repudiandae sunt.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
					<AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
						<Typography> Q: Nobis optio repudiandae sunt ?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant='subtitle2'>
							A: Accusamus accusantium aperiam delectus dicta dolor hic inventore laudantium, modi
							mollitia
							nam
							nobis optio repudiandae sunt.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
					<AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
						<Typography>Q: Sit amet blandit leo lobortis eget ?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant='subtitle2'>
							A: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
							sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Container>
		</Zoom>
	)
}

FaqPage.displayName = 'FAQ'
FaqPage.routeName = '/faq'
FaqPage.icon = 'question_answer'