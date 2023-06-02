import { theme } from 'theme/theme'
import { Box, Typography, styled } from '@mui/material'

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

export const CardInfoWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExtraInfoVisible',
})<{ isExtraInfoVisible?: boolean }>(({ theme, isExtraInfoVisible }) => ({
  display: 'grid',
  gridTemplateRows: `min-content ${isExtraInfoVisible ? '1fr' : '0fr'}`,
  transition: 'grid-template-rows 0.75s',
  padding: theme.spacing(2),
}))

export const CardMainInfoWrapper = styled(Box)`
  position: relative;
`

export const CardExtraInfoWrapper = styled(Box)`
  overflow: hidden;
`

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
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    background-color: ${theme.palette.background.default};
    border-radius:  ${theme.spacing(4)};
  `
)

export const CaligariLabels = styled('span')(
  ({ theme }) => `
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: ${theme.spacing(3)};
  ::after {
    content: '';
    height: 1px;
    background-color: silver;
    flex-grow: 1;
    margin-left:${theme.spacing(4)};
  }
`
)
