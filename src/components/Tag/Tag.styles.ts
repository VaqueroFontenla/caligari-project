import { styled } from '@mui/material'

export const StyledCheckboxTag = styled('input')(
  ({ theme }) => `
    display: none;
  `
)
StyledCheckboxTag.defaultProps = {
  type: 'checkbox',
}

export const StyledTagWrapper = styled('li', {
  shouldForwardProp: (prop) => prop !== 'isChecked',
})<{
  isChecked?: boolean
}>(
  ({ theme, isChecked }) => `
    background-color: ${
      isChecked ? theme.palette.secondary.main : theme.palette.background.default
    };
    border-radius:  ${theme.spacing(4)};
    cursor: pointer;
  `
)

export const StyledTag = styled('label')(
  ({ theme }) => `
    font-size: ${theme.spacing(3)};
    font-weight: bold;
    display: inline-grid;
    grid-template-columns: auto 1fr;
    column-gap:${theme.spacing(1)};
    align-items: center;
    width:100%;
    height:100%;
    padding: ${theme.spacing(1)} ${theme.spacing(3)};
  `
)
