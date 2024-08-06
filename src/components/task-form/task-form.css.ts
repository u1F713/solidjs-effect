import {style} from '@vanilla-extract/css'

export const todoInputStyle = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '0.5em'
})

export const inputText = style({
  width: '100%',
  border: '1px solid #A0A0A0',
  borderRadius: '5px',
  padding: '0.5em',
  transition: '150ms linear',

  ':focus': {
    outline: 'none',
    borderColor: 'oklch(84.72% 0 0)',
    boxShadow: '0 0px 1px 3px oklch(100% 0 100 / 20%)'
  }
})

export const inputSubmit = style({
  padding: '0px 1.2em',
  backgroundColor: 'transparent',
  border: '1px solid oklch(100% 0 100 / 20%)',
  borderRadius: '5px',
  transition: '150ms linear',

  ':hover': {
    borderColor: 'oklch(84.72% 0 0)'
  }
})
