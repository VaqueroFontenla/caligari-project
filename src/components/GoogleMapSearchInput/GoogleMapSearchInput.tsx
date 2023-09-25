import { ChangeEvent, FC, SyntheticEvent, useState } from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { useGoogleMapsScript, Libraries } from 'use-google-maps-script'
import { TextField, CircularProgress, Autocomplete } from '@mui/material'

interface GoogleMapSearchInputProps {
  onSelectAddress: (address: string, latitude: number | null, longitude: number | null) => void
}

const libraries: Libraries = ['places']

export const GoogleMapSearchInput: FC<GoogleMapSearchInputProps> = ({ onSelectAddress }) => {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '',
    libraries,
  })
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300 })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (e.target.value === '') {
      onSelectAddress('', null, null)
    }
  }

  const handleSelect = async (address: string) => {
    setValue(address, false)
    clearSuggestions()

    try {
      const results = await getGeocode({ address })
      const { lat, lng } = await getLatLng(results[0])
      onSelectAddress(address, lat, lng)
    } catch (error) {
      console.error(`😱 Error:`, error)
    }
  }

  if (!isLoaded) return <CircularProgress />
  if (loadError) return <div>Error loading</div>
  return (
    <Autocomplete
      freeSolo
      id="name"
      disableClearable
      options={data}
      onChange={(
        _event: SyntheticEvent<Element, Event>,
        newValue: NonNullable<string | google.maps.places.AutocompletePrediction>
      ) => handleSelect((newValue as google.maps.places.AutocompletePrediction).description)}
      renderInput={(params) => (
        <TextField
          name="name"
          placeholder="Nombre del bar..."
          variant="outlined"
          fullWidth
          value={value}
          onChange={handleChange}
        />
      )}
    />
  )
}
