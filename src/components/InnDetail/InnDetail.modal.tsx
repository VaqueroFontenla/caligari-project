import { FC } from 'react'
import { Dialog, DialogContent, DialogTitle, Typography, Box, Slide } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Inn } from '@/models/Inn.model'
import { CaligariLabelsText, InnFeaturesWrapper } from './InnDetail.styles'
import { CaligariLabel, Transition } from '..'

interface InnDetailModalProps {
  inn: Inn
  open: boolean
  onClose: () => void
}

export const InnDetailModal: FC<InnDetailModalProps> = ({ inn, open, onClose }) => {
  const { name, address, city, features, description } = inn
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
        <Box>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {`${address}, ${city}`}
          </Typography>
        </Box>
        <CloseIcon onClick={onClose} fontSize="large" sx={{ cursor: 'pointer' }} />
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" color="text.secondary" mb={4}>
          {description}
        </Typography>
        <CaligariLabelsText>Etiquetas Caligari</CaligariLabelsText>
        <InnFeaturesWrapper>
          {features.map((feature) => (
            <CaligariLabel caligariLabel={feature} key={feature.id} />
          ))}
        </InnFeaturesWrapper>
      </DialogContent>
    </Dialog>
  )
}
