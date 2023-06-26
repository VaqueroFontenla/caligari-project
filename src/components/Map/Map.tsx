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
  expandMap: () => void
  isListVisible?: boolean
}

export const Map: FC<MapProps> = ({ inns, expandMap, isListVisible }) => {
  return (
    <StyledMapContainer center={[40.417, -3.7038]} zoom={13} zoomControl={false}>
      <StyledExpandIcon onClick={expandMap} isListVisible={isListVisible}>
        {isListVisible ? (
          <ArrowBackIosNewIcon fontSize="small" />
        ) : (
          <>
            <Typography variant="body1">Mostrar listado</Typography>
            <ArrowForwardIosIcon fontSize="small" />
          </>
        )}
      </StyledExpandIcon>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      {inns &&
        inns.map((inn) => {
          const { lat, lon, id } = inn
          if (lat && lon) {
            return (
              <Marker position={[lat, lon]} key={id}>
                <Popup inn={inn} />
              </Marker>
            )
          }
        })}
    </StyledMapContainer>
  )
}

export default Map
