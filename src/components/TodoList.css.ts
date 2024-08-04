import {style} from '@vanilla-extract/css'

export const todoListStyle = style({
  listStyle: 'none',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '0.5em'
})

export const listItem = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto'
})

export const deleteBtn = style({
  padding: '0px 1em',
  backgroundColor: 'transparent',
  boxShadow: '0px 0px 0px 1px oklch(62.8% 0.25 25)',
  border: 'none',
  borderRadius: '3px',
  transition: '150ms',

  ':hover': {
    background: 'oklch(62.8% 0.25 25)'
  }
})
