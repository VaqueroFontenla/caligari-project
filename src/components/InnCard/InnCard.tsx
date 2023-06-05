import { Card, CardMedia, Rating, Typography, Tooltip, Fab, useTheme } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useToggle } from '@/hooks/useToggle'
import { Inn } from '@/models/Inn.model'
import {
  CardInfoWrapper,
  CardMediaWrapper,
  CaligariLabelsWrapper,
  LabelRatingWrapper,
  CardExtraInfoWrapper,
  CardMainInfoWrapper,
  CaligariLabelsText,
} from './InnCard.styles'
import { CaligariLabel } from '../CaligariLabel/CaligariLabel'

interface InnCardProps {
  inn: Inn
}
export const InnCard: React.FC<InnCardProps> = ({ inn }) => {
  const theme = useTheme()
  const { image, name, rating, description, address, city, features } = inn
  const { isVisible: isExtraInfoVisible, toggle } = useToggle()
  return (
    <Card sx={{ transition: 'all 0.3s 0s ease-in' }}>
      <CardMediaWrapper>
        <CardMedia component="img" height="230" image={image} alt={`${name} image`} />
        <LabelRatingWrapper>
          <Rating defaultValue={rating} size="small" />
        </LabelRatingWrapper>
      </CardMediaWrapper>
      <CardInfoWrapper isExtraInfoVisible={isExtraInfoVisible}>
        <CardMainInfoWrapper>
          <Typography variant="body1" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {`${address}, ${city}`}
          </Typography>
          <Tooltip arrow title="Mostrar más">
            <Fab
              onClick={toggle}
              size="small"
              color="secondary"
              aria-label="Mostrar más"
              sx={{ position: 'absolute', right: '5%', bottom: '10%' }}
            >
              <ExpandMoreIcon />
            </Fab>
          </Tooltip>
        </CardMainInfoWrapper>
        <CardExtraInfoWrapper>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {description}
          </Typography>
          <CaligariLabelsText>Etiquetas Caligari</CaligariLabelsText>
          <CaligariLabelsWrapper>
            {features.map((feature) => (
              <CaligariLabel key={feature.id} caligariLabel={feature} />
            ))}
          </CaligariLabelsWrapper>
        </CardExtraInfoWrapper>
      </CardInfoWrapper>
    </Card>
  )
}
