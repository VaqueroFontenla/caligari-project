import { Box, styled } from '@mui/material'

export const CardMediaWrapper = styled(Box)(
  ({ theme }) => `
  position: relative;
   `
)

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

export const LabelFeaturesWrapper = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-wrap: wrap;
    gap:${theme.spacing(1)};
    padding: ${theme.spacing(3)} 0;
  `
)

export const LabelFeatureWrapper = styled(Box)(
  ({ theme }) => `
    display: grid;
    grid-template-columns: auto 1fr;
    font-size: ${theme.spacing(3)};
    font-weight: bold;
    padding: ${theme.spacing(1)};
    background-color: ${theme.palette.secondary.main};
    border-radius:  ${theme.spacing(4)};
  `
)
