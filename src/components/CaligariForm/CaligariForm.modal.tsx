import { ChangeEvent, FC, FormEvent, MouseEventHandler, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Rating,
  CircularProgress,
  Grid,
  Box,
  useTheme,
  Button,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { CaligariLabel, Transition } from '..'
import { InnFeaturesWrapper } from './CaligariForm.styles'
import { InnPayload } from '@/models/Inn.model'
import { useFeatures } from '@/hooks/useFeatures'

interface CaligariFormProps {
  open: boolean
  onClose: () => void
}

const initialFormData: InnPayload = {
  name: '',
  description: '',
  address: '',
  rating: 0,
  features: [],
}
export const CaligariForm: FC<CaligariFormProps> = ({ open, onClose }) => {
  const theme = useTheme()
  const { features, featuresLoading, featuresError } = useFeatures()
  const [formData, setFormData] = useState<InnPayload>(initialFormData)
  const isChecked = (featureId: string) => formData.features.includes(featureId)

  const handleRatingInput = (newRatingValue: number | null) =>
    setFormData({ ...formData, rating: newRatingValue })

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
  const handleReset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setFormData(initialFormData)
    onClose()
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
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={4} md={3}>
              <Box
                sx={{
                  pt: `${theme.spacing(2)}`,
                  pb: { xs: 1, md: 0 },
                }}
              >
                <b>Nombre:</b>
              </Box>
            </Grid>
            <Grid
              sx={{
                mb: `${theme.spacing(3)}`,
              }}
              item
              xs={12}
              sm={8}
              md={9}
            >
              <TextField
                id="name"
                name="name"
                placeholder="Nombre del bar..."
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Box
                sx={{
                  pt: `${theme.spacing(2)}`,
                  pb: { xs: 1, md: 0 },
                }}
              >
                <b>Descripción:</b>
              </Box>
            </Grid>
            <Grid
              sx={{
                mb: `${theme.spacing(3)}`,
              }}
              item
              xs={12}
              sm={8}
              md={9}
            >
              <TextField
                id="description"
                name="description"
                placeholder="¿Cómo es este bar?"
                variant="outlined"
                multiline
                minRows={3}
                value={formData.description}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Box
                sx={{
                  pt: `${theme.spacing(2)}`,
                  pb: { xs: 1, md: 0 },
                }}
              >
                <b>Dirección:</b>
              </Box>
            </Grid>
            <Grid
              sx={{
                mb: `${theme.spacing(3)}`,
              }}
              item
              xs={12}
              sm={8}
              md={9}
            >
              <TextField
                id="address"
                name="address"
                placeholder="¿Dónde está?"
                variant="outlined"
                value={formData.address}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Box
                sx={{
                  pt: `${theme.spacing(2)}`,
                  pb: { xs: 1, md: 0 },
                }}
              >
                <b>Califica:</b>
              </Box>
            </Grid>
            <Grid
              sx={{
                mb: `${theme.spacing(3)}`,
              }}
              item
              xs={12}
              sm={8}
              md={9}
              textAlign="center"
            >
              <Rating
                size="large"
                value={formData.rating}
                onChange={(_event: React.SyntheticEvent, newValue: number | null) =>
                  handleRatingInput(newValue)
                }
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Box
                sx={{
                  pt: `${theme.spacing(2)}`,
                  pb: { xs: 1, md: 0 },
                }}
              >
                <b>Selecciona etiquetas caligari:</b>
              </Box>
            </Grid>
            <Grid
              sx={{
                my: `${theme.spacing(3)}`,
              }}
              item
              xs={12}
            >
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
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              my: 6,
              [theme.breakpoints.up('sm')]: {
                justifyContent: 'flex-end',
                columnGap: theme.spacing(6),
              },
            }}
          >
            <Button variant="outlined" type="button" onClick={handleReset}>
              Cancelar
            </Button>
            <Button variant="contained" type="submit">
              Añadir Caligari
            </Button>
          </Grid>
        </DialogContent>
      </form>
    </Dialog>
  )
}
