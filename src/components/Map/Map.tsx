import { FC } from 'react'
import { TileLayer, Marker, ZoomControl } from 'utils/dynamicImportsLeaflet'
import { Inn } from '@/models/Inn.model'
import { Popup } from './_components/Popup/Popup'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { StyledExpandIcon, StyledMapContainer } from './Map.styles'
import { Typography } from '@mui/material'

interface MapProps {
  inns?: Inn[]
  expandMap?: () => void
  isListVisible?: boolean
}

export const Map: FC<MapProps> = ({ inns, expandMap, isListVisible }) => {
  return (
    <StyledMapContainer center={[40.417, -3.7038]} zoom={13} zoomControl={false}>
      <StyledExpandIcon onClick={expandMap} isListVisible={isListVisible}>
        {expandMap &&
          (isListVisible ? (
            <ArrowBackIosNewIcon fontSize="small" />
          ) : (
            <>
              <Typography variant="body1">Mostrar listado</Typography>
              <ArrowForwardIosIcon fontSize="small" />
            </>
          ))}
      </StyledExpandIcon>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      {inns &&
        inns.map((inn) => {
          const {
            coordinates: { _lat, _long },
            id,
          } = inn
          if (_lat && _long) {
            return (
              <Marker position={[_lat, _long]} key={id}>
                <Popup inn={inn} />
              </Marker>
            )
          }
        })}
    </StyledMapContainer>
  )
}

export default Map
