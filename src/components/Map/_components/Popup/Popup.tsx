import { FC } from 'react'
import { Inn } from '@/models/Inn.model'
import { StyledPopup, CardMediaWrapper, LabelRatingWrapper, CardInfoWrapper } from './Popup.styles'
import { Box, Button, CardMedia, Rating, Typography, useTheme } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useToggle } from '@/hooks/useToggle'
import { InnDetailModal } from '@/components/InnDetail/InnDetail.modal'

interface MapProps {
  inn: Inn
}

export const Popup: FC<MapProps> = ({ inn }) => {
  const theme = useTheme()
  const { isVisible, toggle } = useToggle()
  const { image, rating, name, address, city } = inn
  return (
    <StyledPopup>
      <Box sx={{ p: theme.spacing(3), paddingTop: theme.spacing(8) }}>
        <CardMediaWrapper>
          <CardMedia component="img" height="120" image={image} alt={`${name} image`} />
          <LabelRatingWrapper>
            <Rating defaultValue={rating} size="small" readOnly />
          </LabelRatingWrapper>
        </CardMediaWrapper>
        <Typography variant="body1" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${address}, ${city}`}
        </Typography>
        <Button
          variant="text"
          size="small"
          sx={{ textDecoration: 'underline', p: 0, m: 0 }}
          onClick={toggle}
        >
          <Typography variant="body1" fontSize="small">
            Mostrar más
          </Typography>
          <ArrowForwardIosIcon fontSize="inherit" />
        </Button>
      </Box>
      <InnDetailModal inn={inn} open={isVisible} onClose={toggle} />
    </StyledPopup>
  )
}
