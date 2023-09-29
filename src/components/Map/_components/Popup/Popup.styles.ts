import { styled, Box } from '@mui/material'
import { Popup } from 'utils/dynamicImportsLeaflet'

export const StyledPopup = styled(Popup)(
  ({ theme }) => `
  .leaflet-popup-content {
    margin: 0;
  }
  .leaflet-popup-content p {
    margin: 0;
    margin-bottom: ${theme.spacing(2)};
  }
  .leaflet-popup-close-button {
    top: ${theme.spacing(1)} !important;
    right: ${theme.spacing(2)} !important;
  }
  .leaflet-popup-close-button span {
    font-size: ${theme.spacing(8)};
  }
`
)

export const CardMediaWrapper = styled(Box)`
  position: relative;
`

export const LabelRatingWrapper = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(1)};
    bottom: ${theme.spacing(1)};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(1)};
    background-color: ${theme.palette.common.white};
    border-radius:  ${theme.spacing(4)};
  `
)
