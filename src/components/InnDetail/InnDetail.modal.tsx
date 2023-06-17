import { FC } from 'react'
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Inn } from '@/models/Inn.model'
import { InnFeaturesWrapper } from './InnDetail.styles'
import { CaligariLabel } from '..'

interface InnDetailModalProps {
  inn: Inn
  open: boolean
  onClose: () => void
}

export const InnDetailModal: FC<InnDetailModalProps> = ({ inn, open, onClose }) => {
  const { image, name, rating, address, city, features, description } = inn
  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={onClose}>
      <DialogTitle
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 6 }}
      >
        <Typography variant="h5">{name}</Typography>
        <CloseIcon onClick={onClose} fontSize="large" />
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <InnFeaturesWrapper>
          {features.map((feature) => (
            <CaligariLabel caligariLabel={feature} key={feature.id} />
          ))}
        </InnFeaturesWrapper>
      </DialogContent>
    </Dialog>
  )
}
