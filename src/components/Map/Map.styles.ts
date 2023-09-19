import { styled } from '@mui/material'
import isPropValid from '@emotion/is-prop-valid'
import { MapContainer } from 'utils/dynamicImportsLeaflet'

export const StyledMapContainer = styled(MapContainer)(
  ({ theme }) => `
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;
  z-index: 0;
  
  .leaflet-bar {
    border: 0 !important;
  }
  .leaflet-control-zoom-out,
  .leaflet-control-zoom-in {
    width: ${theme.spacing(8)} !important;
    height: ${theme.spacing(8)} !important;
  }
`
)

export const StyledExpandIcon = styled('span', {
  shouldForwardProp: (prop) => isPropValid(prop as string) && prop !== 'isListVisible',
})<{
  isListVisible?: boolean
}>(
  ({ theme, isListVisible }) => `
  ${
    isListVisible
      ? `
        display: flex;
        justify-content: center;
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
      `
      : `
        display: grid;
        grid-template-columns: 1fr auto;
        column-gap:${theme.spacing(1)};
        padding:${theme.spacing(2)};
      `
  }
  align-items: center;
  position: absolute;
  top: ${theme.spacing(2.5)};
  left:${theme.spacing(2.5)};
  z-index: 800; /* Same leaflet zoom control */
  background-color: ${theme.palette.common.white};
  border-radius: ${theme.spacing(1)};
`
)
