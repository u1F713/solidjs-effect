import {style} from '@vanilla-extract/css'

export const containerStyle = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  maxWidth: '40em',
  margin: '1em auto',
  padding: '1em',
  gap: '2em',

  borderColor: 'oklch(26.45% 0.01 268.31)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '5px'
})
