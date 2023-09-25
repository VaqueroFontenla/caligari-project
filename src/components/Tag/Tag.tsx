import { ChangeEvent, FC, useState } from 'react'
import { StyledTagWrapper, StyledTag, StyledCheckboxTag } from './Tag.styles'
import { Feature } from '@/models/Inn.model'

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
  'Teléfono Público': <PhoneIcon color="primary" fontSize="small" />,
  'Tele Local': <TvIcon color="primary" fontSize="small" />,
  'Que puedas dejar las llaves': <KeyIcon color="primary" fontSize="small" />,
  'Vaso de tubo': <WineBarIcon color="primary" fontSize="small" />,
  'Máquina de tabaco (antigua de botones redondos)': (
    <SmokingRoomsIcon color="primary" fontSize="small" />
  ),
  'Hay caldo': <SoupKitchenIcon color="primary" fontSize="small" />,
  'Clientela mayor de 50 años': <Face5Icon color="primary" fontSize="small" />,
  'Curasán con gomina (luisona)': <BakeryDiningIcon color="primary" fontSize="small" />,
  'No tiene Instagram': <InstagramIcon color="primary" fontSize="small" />,
  'Vitrina con tapas de los 70s (de la transición)': <TapasIcon color="primary" fontSize="small" />,
  'Cortado en vaso de caña': <CoffeeIcon color="primary" fontSize="small" />,
  Tragaperras: <TollIcon color="primary" fontSize="small" />,
  'Fotos de platos combinados': <RestaurantIcon color="primary" fontSize="small" />,
  'Camarero: camisa blanca y pantalón negro (pinzas)': (
    <Person4Icon color="primary" fontSize="small" />
  ),
  'Cartel de neón': <FluorescentIcon color="primary" fontSize="small" />,
  'Plancha inflamable': <OutdoorGrillIcon color="primary" fontSize="small" />,
  'Vermú de grifo': <LocalDrinkIcon color="primary" fontSize="small" />,
  'Tapa estrella (branding): gambas a la planca o pincho de tortilla': (
    <SetMealIcon color="primary" fontSize="small" />
  ),
  'Negocio familiar': <FamilyRestroomIcon color="primary" fontSize="small" />,
  'No secamanos': <DryIcon color="primary" fontSize="small" />,
  'Tapas bien de aceite': <OilBarrelIcon color="primary" fontSize="small" />,
  'No hay tarjeta para pagar': <CreditCardOffIcon color="primary" fontSize="small" />,
  'Ventanas grandes': <CropSquareIcon color="primary" fontSize="small" />,
  Extintor: <FireExtinguisherIcon color="primary" fontSize="small" />,
  'Cerveza de barril que no sea Cruzcampo o Amstel': (
    <SportsBarIcon color="primary" fontSize="small" />
  ),
  'Público diverso': <GroupsIcon color="primary" fontSize="small" />,
  'Vino de la casa': <WineBarIcon color="primary" fontSize="small" />,
  'Barra de mármol': <TableRestaurantIcon color="primary" fontSize="small" />,
  'Jaula de periquito': <FlutterDashIcon color="primary" fontSize="small" />,
  'Local Man (Parroquiano)': <Face6Icon color="primary" fontSize="small" />,
  'Calvos con peluquín': <Face5Icon color="primary" fontSize="small" />,
  'No leche vegetal': <CoffeeMakerIcon color="primary" fontSize="small" />,
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

interface TagProps {
  tag: Feature
  isChecked?: boolean
  handleChangeTag?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Tag: FC<TagProps> = ({ tag, isChecked, handleChangeTag }) => {
  const { id, name } = tag
  return (
    <StyledTagWrapper isChecked={isChecked}>
      <StyledTag htmlFor={id}>
        {handleChangeTag && (
          <StyledCheckboxTag id={id} name={id} onChange={handleChangeTag} checked={isChecked} />
        )}
        {LabelIcon[name]}
        {name}
      </StyledTag>
    </StyledTagWrapper>
  )
}
