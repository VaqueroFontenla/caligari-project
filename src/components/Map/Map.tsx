import { FC } from 'react'
import { TileLayer, Marker } from 'utils/dynamicImportsLeaflet'
import { StyledMapContainer } from './Map.styles'
import { Inn } from '@/models/Inn.model'
import { InnCard } from '../InnCard/InnCard'
import { Popup } from './_components/Popup/Popup'

interface MapProps {
  inns?: Inn[]
}

export const Map: FC<MapProps> = ({ inns }) => {
  return (
    <StyledMapContainer center={[40.417, -3.7038]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
