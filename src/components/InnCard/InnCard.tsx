import { Card, CardMedia, Rating, Typography } from '@mui/material'
import { Inn } from '@/models/Inn.model'
import {
  CardInfoWrapper,
  CardMediaWrapper,
  LabelFeatureWrapper,
  LabelFeaturesWrapper,
  LabelRatingWrapper,
} from './InnCard.styles'

interface InnCardProps {
  inn: Inn
}
export const InnCard: React.FC<InnCardProps> = ({ inn }) => {
  const { image, name, rating, description, address, city, features } = inn
  return (
    <Card>
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
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <LabelFeaturesWrapper>
          {features.map((feature) => (
            <LabelFeatureWrapper key={feature.id}>{feature.name}</LabelFeatureWrapper>
          ))}
        </LabelFeaturesWrapper>
      </CardInfoWrapper>
    </Card>
  )
}
