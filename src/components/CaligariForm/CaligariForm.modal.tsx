import { ChangeEvent, FC, FormEvent, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
  Rating,
  CircularProgress,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { CaligariLabel, Transition } from '..'
import { CaligariFormElement, InnFeaturesWrapper, InputWrapper } from './CaligariForm.styles'
import { InnPayload } from '@/models/Inn.model'
import { useFeatures } from '@/hooks/useFeatures'

interface CaligariFormProps {
  open: boolean
  onClose: () => void
}

export const CaligariForm: FC<CaligariFormProps> = ({ open, onClose }) => {
  const { features, featuresLoading, featuresError } = useFeatures()
  const [formData, setFormData] = useState<InnPayload>({
    name: '',
    description: '',
    address: '',
    city: '',
    coordinates: { _lat: null, _long: null },
    rating: 0,
    features: [],
    image: '',
  })
  const isChecked = (featureId: string) => formData.features.includes(featureId)
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  const handleChangeCaligariLabel = (event: ChangeEvent<HTMLInputElement>) => {
    if (!!event.target.checked)
      setFormData({ ...formData, features: [...formData.features, event.target.name] })
    if (!event.target.checked)
      setFormData({
        ...formData,
        features: formData.features.filter((feature) => feature !== event.target.name),
      })
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.dir(formData)
  }

  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={onClose} TransitionComponent={Transition}>
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 6,
        }}
      >
        Añade tu bar Caligari
        <CloseIcon onClick={onClose} fontSize="large" sx={{ cursor: 'pointer' }} />
      </DialogTitle>
      <DialogContent>
        <CaligariFormElement onSubmit={handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="Nombre"
            variant="outlined"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            id="description"
            name="description"
            label="Descripción"
            variant="outlined"
            multiline
            minRows={3}
            value={formData.description}
            onChange={handleInputChange}
          />
          <TextField
            id="address"
            name="address"
            label="Dirección"
            variant="outlined"
            value={formData.address}
            onChange={handleInputChange}
          />
          <TextField
            id="city"
            name="city"
            label="Ciudad"
            variant="outlined"
            value={formData.city}
            onChange={handleInputChange}
          />
          <InputWrapper>
            <Typography variant="body1" color="text.secondary" mb={4}>
              Califica:
            </Typography>{' '}
            <Rating
              defaultValue={formData.rating}
              size="large"
              value={formData.rating}
              sx={{ justifySelf: 'center' }}
            />
          </InputWrapper>
          <InputWrapper>
            <Typography variant="body1" color="text.secondary" mb={4}>
              Etiquetas Caligari:
            </Typography>{' '}
            {featuresLoading && <CircularProgress />}
            {features && (
              <InnFeaturesWrapper>
                {features.map((feature) => (
                  <CaligariLabel
                    caligariLabel={feature}
                    key={feature.id}
                    isChecked={isChecked(feature.id)}
                    handleChangeCaligariLabel={handleChangeCaligariLabel}
                  />
                ))}
              </InnFeaturesWrapper>
            )}
          </InputWrapper>
        </CaligariFormElement>
      </DialogContent>
    </Dialog>
  )
}
