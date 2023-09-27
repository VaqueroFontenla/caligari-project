import { FC } from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { useGoogleMapsScript, Libraries } from 'use-google-maps-script'
import { TextField, CircularProgress, Autocomplete } from '@mui/material'
import { IGoogleMapSearchInput } from '@/models/Form.model'

interface GoogleMapSearchInputProps {
  onSelectAddress: (googleMapSearchInputValues: IGoogleMapSearchInput) => void
}

const libraries: Libraries = ['places']

const GoogleMapSearchInputComponent: FC<GoogleMapSearchInputProps> = ({ onSelectAddress }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data: googlePlaces, loading },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300 })

  const handleChange = (value: string) => {
    setValue(value)
    if (value === '') {
      onSelectAddress({ name: '', address: '', lat: null, lng: null, city: '' })
    }
  }

  const handleSelect = async (place: string | google.maps.places.AutocompletePrediction | null) => {
    if (place) {
      const {
        description,
        structured_formatting: { main_text: name, secondary_text: address },
      } = place as google.maps.places.AutocompletePrediction
      handleChange(name)
      clearSuggestions()
      try {
        const results = await getGeocode({ address: description })
        const [geoInfo] = results
        console.log('geoInfo', geoInfo)
        const { lat, lng } = await getLatLng(geoInfo)
        const city =
          geoInfo.address_components.find((component) => component.types.includes('locality'))
            ?.long_name || ''
        console.log('city', city)
        onSelectAddress({ name, address: geoInfo.formatted_address, lat, lng, city })
      } catch (error) {
        console.error(`😱 Error:`, error)
      }
    }
  }

  return (
    <Autocomplete
      noOptionsText={status === 'ZERO_RESULTS' ? 'No hay opciones' : 'Cargando...'}
      disabled={!ready}
      id="name"
      freeSolo
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
      filterOptions={(option) => option}
      options={status === 'OK' ? googlePlaces : []}
      onChange={(
        _event: React.SyntheticEvent,
        value: string | google.maps.places.AutocompletePrediction | null
      ) => handleSelect(value)}
      value={value}
      onInputChange={(_event: React.SyntheticEvent, value: string) => handleChange(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Nombre del bar..."
          variant="outlined"
          fullWidth
          value={value}
          InputProps={{
            ...params.InputProps,
          }}
        />
      )}
    />
  )
}

export const GoogleMapSearchInput: FC<GoogleMapSearchInputProps> = ({ onSelectAddress }) => {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries,
  })

  if (!isLoaded) return <CircularProgress />
  if (loadError) return <div>Error loading</div>
  return <GoogleMapSearchInputComponent onSelectAddress={onSelectAddress} />
}
