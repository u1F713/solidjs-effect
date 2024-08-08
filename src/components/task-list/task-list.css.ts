import {style} from '@vanilla-extract/css'

export const taskListStyle = style({
  listStyle: 'none',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '0.5em'
})

export const taskItemStyle = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto'
})

export const taskBody = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.5rem',
  userSelect: 'none',
  transition: 'color 300ms',

  selectors: {
    '&[data-state="done"]': {
      textDecoration: 'line-through',
      color: 'gray'
    }
  }
})

export const deleteBtn = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'unset',
  borderRadius: '5px',
  backgroundColor: 'transparent',
  boxShadow: '0px 0px 0px 1px oklch(62.8% 0.25 25)',
  aspectRatio: '16 / 9',
  transition: '150ms',
  height: '3em',

  ':hover': {
    backgroundColor: 'oklch(62.8% 0.25 25)'
  }
})
