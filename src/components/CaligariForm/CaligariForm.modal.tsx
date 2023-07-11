import { FC, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  TextField,
  Rating,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Transition } from '..'
import { CaligariFormElement, RatingWrapper } from './CaligariForm.styles'
import { Inn } from '@/models/Inn.model'
import { useFeatures } from '@/hooks/useFeatures'

interface CaligariFormProps {
  open: boolean
  onClose: () => void
}

export const CaligariForm: FC<CaligariFormProps> = ({ open, onClose }) => {
  const { features, featuresLoading, featuresError } = useFeatures()
  const [formData, setFormData] = useState<Inn>({
    name: '',
    description: '',
    address: '',
    city: '',
    coordinates: { _lat: null, _long: null },
    rating: 0,
    features: [],
    image: '',
  })
  const handleSubmit = () => ''
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
        <Typography variant="h5">Añade tu bar Caligari</Typography>
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
          />
          <TextField
            id="description"
            name="description"
            label="Descripción"
            variant="outlined"
            multiline
            minRows={3}
            value={formData.description}
          />
          <TextField
            id="address"
            name="address"
            label="Dirección"
            variant="outlined"
            value={formData.address}
          />
          <TextField
            id="city"
            name="city"
            label="Ciudad"
            variant="outlined"
            value={formData.city}
          />
          <RatingWrapper>
            <Typography variant="body1" color="text.secondary" mb={4}>
              Califica:
            </Typography>{' '}
            <Rating
              defaultValue={formData.rating}
              size="large"
              value={formData.rating}
              sx={{ justifySelf: 'center' }}
            />
          </RatingWrapper>
        </CaligariFormElement>
      </DialogContent>
    </Dialog>
  )
}
