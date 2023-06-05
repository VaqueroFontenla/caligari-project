import React from 'react'
import { IconWrapper } from './Icon.styles'
import { IconComponentProps } from './Icon.types'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import PhoneIcon from '@mui/icons-material/Phone'
import TvIcon from '@mui/icons-material/Tv'
import KeyIcon from '@mui/icons-material/Key'
import WineBarIcon from '@mui/icons-material/WineBar'
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms'
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen'
import Face5Icon from '@mui/icons-material/Face5'
import BakeryDiningIcon from '@mui/icons-material/BakeryDining'
import InstagramIcon from '@mui/icons-material/Instagram'
import CoffeeIcon from '@mui/icons-material/Coffee'

interface IconComponentProps extends React.ComponentPropsWithoutRef<'span'> {
  type: string
  color?: string
  size?: number
  reverse?: boolean
  onClick?: () => void
}

const typeIcon: Record<string, React.ReactElement> = {
  1: <EmojiEventsIcon />,
  4: <PhoneIcon />,
  5: <TvIcon />,
  6: <KeyIcon />,
  7: <WineBarIcon />,
  8: <SmokingRoomsIcon />,
  9: <SoupKitchenIcon />,
  10: <Face5Icon />,
  11: <BakeryDiningIcon />,
  12: <InstagramIcon />,
  14: <CoffeeIcon />,
}

export const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>(
  ({ type, color, size, reverse, onClick, ...props }, ref) => (
    <IconWrapper size={size} color={color} onClick={onClick} ref={ref} {...props}>
      {typeIcon[type]}
    </IconWrapper>
  )
)

Icon.displayName = 'Icon'
