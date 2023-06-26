import { FC } from 'react'
import { TileLayer, Marker, ZoomControl } from 'utils/dynamicImportsLeaflet'
import { Inn } from '@/models/Inn.model'
import { Popup } from './_components/Popup/Popup'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { StyledMapContainer } from './Map.styles'

interface MapProps {
  inns?: Inn[]
}

export const Map: FC<MapProps> = ({ inns }) => {
  return (
    <StyledMapContainer center={[40.417, -3.7038]} zoom={13} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      {inns &&
        inns.map((inn) => (
          <Marker position={[inn.lat, inn.lon]} key={inn.id}>
            <Popup inn={inn} />
          </Marker>
        ))}
    </StyledMapContainer>
  )
}

export default Map
