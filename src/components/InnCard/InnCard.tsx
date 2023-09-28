import { Button, Card, CardMedia, Rating, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Inn } from '@/models/Inn.model'
import { CardInfoWrapper, CardMediaWrapper, LabelRatingWrapper } from './InnCard.styles'
import { useToggle } from '@/hooks/useToggle'
import { InnDetailModal } from '../InnDetail/InnDetail.modal'

interface InnCardProps {
  inn: Inn
}
export const InnCard: React.FC<InnCardProps> = ({ inn }) => {
  const { image, name, rating, address, city } = inn
  const { isVisible, toggle } = useToggle()
  return (
    <>
      <Card sx={{ transition: 'all 0.3s 0s ease-in', overflow: 'visible' }}>
        <CardMediaWrapper>
          <CardMedia
            component="img"
            height="230"
            image={image || '/images/noCaligariImage.svg'}
            alt={`${name} image`}
          />
          <LabelRatingWrapper>
            <Rating defaultValue={rating || 0} size="small" readOnly />
          </LabelRatingWrapper>
        </CardMediaWrapper>
        <CardInfoWrapper>
          <Typography variant="body1" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {`${address}, ${city}`}
          </Typography>
          <Button variant="text" size="small" sx={{ textDecoration: 'underline' }} onClick={toggle}>
            Mostrar más
            <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </CardInfoWrapper>
      </Card>
      <InnDetailModal inn={inn} open={isVisible} onClose={toggle} />
    </>
  )
}
