import { ChangeEvent, FC, FormEvent, useState } from 'react'
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
  Alert,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Tag, Transition, GoogleMapSearchInput } from '..'
import { InnFeaturesWrapper } from './Form.styles'
import { InnFormData } from '@/models/Inn.model'
import { useFeatures } from '@/hooks/useFeatures'
import { IGoogleMapSearchInput } from '@/models/Form.model'
import { apiClient, firebaseCollection } from 'utils/firebase'
import { mapFeaturesToFBDocument } from 'mappers/mapFeaturesToFBDocument'

interface FormProps {
  open: boolean
  onClose: () => void
}

const initialFormData: InnFormData = {
  name: '',
  description: '',
  address: '',
  city: '',
  rating: 0,
  features: [],
  coordinates: { _lat: null, _long: null },
}
export const Form: FC<FormProps> = ({ open, onClose }) => {
  const theme = useTheme()

  const { features, featuresLoading, featuresError } = useFeatures()
  const [formData, setFormData] = useState<InnFormData>(initialFormData)
  const [addCaligariLoading, setAddCaligariLoading] = useState<boolean>()
  const [addCaligariError, setCaligariError] = useState<string>()

  const isChecked = (featureId: string) => formData.features.includes(featureId)

  const handleSelectNameInput = ({ name, address, lat, lng, city }: IGoogleMapSearchInput) =>
    setFormData({ ...formData, name, address, coordinates: { _lat: lat, _long: lng }, city })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [event.target.name]: event.target.value })

  const handleRatingInput = (newRatingValue: number | null) =>
    setFormData({ ...formData, rating: newRatingValue })

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
    setAddCaligariLoading(true)
    try {
      const data = {
        ...formData,
        features: mapFeaturesToFBDocument(firebaseCollection.featuresCollection, formData.features),
      }
      return apiClient.post(firebaseCollection.innsCollection, data)
    } catch (error) {
      setCaligariError((error as Error).message || 'No se ha podido añadir un nuevo Bar Caligari')
    }
    setAddCaligariLoading(false)
  }

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
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
                <GoogleMapSearchInput
                  onSelectAddress={(googleMapSearchInputValues: IGoogleMapSearchInput) =>
                    handleSelectNameInput(googleMapSearchInputValues)
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
                      <Tag
                        tag={feature}
                        key={feature.id}
                        isChecked={isChecked(feature.id)}
                        handleChangeTag={handleChangeCaligariLabel}
                      />
                    ))}
                  </InnFeaturesWrapper>
                )}
              </Grid>
            </Grid>
            {addCaligariError && (
              <Grid
                sx={{
                  my: `${theme.spacing(3)}`,
                }}
                item
                xs={12}
              >
                <Alert severity="error">{addCaligariError}</Alert>
              </Grid>
            )}
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
              <Button
                variant="contained"
                type="submit"
                startIcon={addCaligariLoading ? <CircularProgress /> : null}
              >
                Añadir Caligari
              </Button>
            </Grid>
          </DialogContent>
        </form>
      </Dialog>
    </>
  )
}
