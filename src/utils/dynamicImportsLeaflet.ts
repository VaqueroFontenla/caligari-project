import { memo } from 'react'
import dynamic from 'next/dynamic'
import {
  MapContainerProps,
  MarkerProps,
  PopupProps,
  TileLayerProps,
  ZoomControlProps,
} from 'react-leaflet'

export const MapContainer = memo(
  dynamic<MapContainerProps>(() => import('react-leaflet').then((mod) => mod.MapContainer), {
    ssr: false,
  })
)
export const TileLayer = memo(
  dynamic<TileLayerProps>(() => import('react-leaflet').then((mod) => mod.TileLayer), {
    ssr: false,
  })
)
export const Popup = memo(
  dynamic<PopupProps>(() => import('react-leaflet').then((mod) => mod.Popup), {
    ssr: false,
  })
)
export const Marker = memo(
  dynamic<MarkerProps>(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false })
)

export const ZoomControl = memo(
  dynamic<ZoomControlProps>(() => import('react-leaflet').then((mod) => mod.ZoomControl), {
    ssr: false,
  })
)
