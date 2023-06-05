import { Box, styled } from '@mui/material'

export const CardMediaWrapper = styled(Box)`
  position: relative;
`

export const LabelRatingWrapper = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(3)};
    bottom: ${theme.spacing(3)};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(1)};
    background-color: ${theme.palette.common.white};
    border-radius:  ${theme.spacing(4)};
  `
)

export const CardInfoWrapper = styled(Box)(
  ({ theme }) => `
  padding: ${theme.spacing(2)};
`
)
