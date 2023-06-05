import { Card, CardMedia, Rating, Typography } from '@mui/material'
import { Inn } from '@/models/Inn.model'
import { CardInfoWrapper, CardMediaWrapper, LabelRatingWrapper } from './InnCard.styles'

interface InnCardProps {
  inn: Inn
}
export const InnCard: React.FC<InnCardProps> = ({ inn }) => {
  const { image, name, rating, address, city } = inn
  return (
    <Card sx={{ transition: 'all 0.3s 0s ease-in' }}>
      <CardMediaWrapper>
        <CardMedia component="img" height="230" image={image} alt={`${name} image`} />
        <LabelRatingWrapper>
          <Rating defaultValue={rating} size="small" />
        </LabelRatingWrapper>
      </CardMediaWrapper>
      <CardInfoWrapper>
        <Typography variant="body1" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {`${address}, ${city}`}
        </Typography>
      </CardInfoWrapper>
    </Card>
  )
}
