import {style} from '@vanilla-extract/css'

export const containerStyle = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  maxWidth: '40em',
  margin: '1em auto',
  padding: '1em',
  gap: '2em'
})
