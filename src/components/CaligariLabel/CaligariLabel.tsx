import { CaligariLabelWrapper } from './CaligariLabel.styles'
import { FC } from 'react'
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
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant'
import TapasIcon from '@mui/icons-material/Tapas'
import TollIcon from '@mui/icons-material/Toll'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import Person4Icon from '@mui/icons-material/Person4'
import FluorescentIcon from '@mui/icons-material/Fluorescent'
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import SetMealIcon from '@mui/icons-material/SetMeal'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'
import DryIcon from '@mui/icons-material/Dry'
import OilBarrelIcon from '@mui/icons-material/OilBarrel'
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff'
import CropSquareIcon from '@mui/icons-material/CropSquare'
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher'
import SportsBarIcon from '@mui/icons-material/SportsBar'
import GroupsIcon from '@mui/icons-material/Groups'
import FlutterDashIcon from '@mui/icons-material/FlutterDash'
import Face6Icon from '@mui/icons-material/Face6'
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import LunchDiningIcon from '@mui/icons-material/LunchDining'
import GridViewIcon from '@mui/icons-material/GridView'
import RadioIcon from '@mui/icons-material/Radio'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import CakeIcon from '@mui/icons-material/Cake'
import HandshakeIcon from '@mui/icons-material/Handshake'
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance'
import MoneyIcon from '@mui/icons-material/Money'
import AirIcon from '@mui/icons-material/Air'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'
import WarehouseIcon from '@mui/icons-material/Warehouse'

const LabelIcon: Record<string, React.ReactElement> = {
  'Barra de metal': <TableRestaurantIcon color="primary" fontSize="small" />,
  'Trofeo random': <EmojiEventsIcon color="primary" fontSize="small" />,
  5: <PhoneIcon color="primary" fontSize="small" />,
  6: <TvIcon color="primary" fontSize="small" />,
  7: <KeyIcon color="primary" fontSize="small" />,
  8: <WineBarIcon color="primary" fontSize="small" />,
  9: <SmokingRoomsIcon color="primary" fontSize="small" />,
  10: <SoupKitchenIcon color="primary" fontSize="small" />,
  11: <Face5Icon color="primary" fontSize="small" />,
  12: <BakeryDiningIcon color="primary" fontSize="small" />,
  13: <InstagramIcon color="primary" fontSize="small" />,
  14: <TapasIcon color="primary" fontSize="small" />,
  15: <CoffeeIcon color="primary" fontSize="small" />,
  16: <TollIcon color="primary" fontSize="small" />,
  17: <RestaurantIcon color="primary" fontSize="small" />,
  18: <Person4Icon color="primary" fontSize="small" />,
  19: <FluorescentIcon color="primary" fontSize="small" />,
  20: <OutdoorGrillIcon color="primary" fontSize="small" />,
  21: <LocalDrinkIcon color="primary" fontSize="small" />,
  22: <SetMealIcon color="primary" fontSize="small" />,
  23: <FamilyRestroomIcon color="primary" fontSize="small" />,
  24: <DryIcon color="primary" fontSize="small" />,
  25: <OilBarrelIcon color="primary" fontSize="small" />,
  26: <CreditCardOffIcon color="primary" fontSize="small" />,
  27: <CropSquareIcon color="primary" fontSize="small" />,
  28: <FireExtinguisherIcon color="primary" fontSize="small" />,
  29: <SportsBarIcon color="primary" fontSize="small" />,
  30: <GroupsIcon color="primary" fontSize="small" />,
  31: <WineBarIcon color="primary" fontSize="small" />,
  32: <TableRestaurantIcon color="primary" fontSize="small" />,
  33: <FlutterDashIcon color="primary" fontSize="small" />,
  34: <Face6Icon color="primary" fontSize="small" />,
  35: <Face5Icon color="primary" fontSize="small" />,
  36: <CoffeeMakerIcon color="primary" fontSize="small" />,
  'Bufanda de fútbol de Segunda División': <SportsSoccerIcon color="primary" fontSize="small" />,
  'Camarero con tatuaje taleguero': <HeartBrokenIcon color="primary" fontSize="small" />,
  'Sandwich vegetariano con atún': <LunchDiningIcon color="primary" fontSize="small" />,
  'Azulejos en algun sitio': <GridViewIcon color="primary" fontSize="small" />,
  'Radio Olé': <RadioIcon color="primary" fontSize="small" />,
  'Servilletero "Gracias por su visita"': (
    <VolunteerActivismIcon color="primary" fontSize="small" />
  ),
  'Postre: Contesa': <CakeIcon color="primary" fontSize="small" />,
  'Traspaso sin xeito': <HandshakeIcon color="primary" fontSize="small" />,
  'Barril en la puerta': <OilBarrelIcon color="primary" fontSize="small" />,
  'Foto con famoso': <CameraEnhanceIcon color="primary" fontSize="small" />,
  Lotería: <MoneyIcon color="primary" fontSize="small" />,
  'Abrebadero (para servilletas y huesos de pollo)': (
    <DeleteSweepIcon color="primary" fontSize="small" />
  ),
  'Sin oxígeno': <AirIcon color="primary" fontSize="small" />,
  'Cajas de cerveza apiladas a la vista que luego son sillas': (
    <WarehouseIcon color="primary" fontSize="small" />
  ),
}

interface CaligariLabelProps {
  caligariLabel: string
}

export const CaligariLabel: FC<CaligariLabelProps> = ({ caligariLabel }) => {
  return (
    <CaligariLabelWrapper>
      {LabelIcon[caligariLabel]}
      {caligariLabel}
    </CaligariLabelWrapper>
  )
}
