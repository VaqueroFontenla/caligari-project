import { useMediaQuery, useTheme } from '@mui/material'
import { InnsList, Map, Transition } from '@/components/index'
import { useInns } from '@/hooks/useInns'
import { useToggle } from '@/hooks/useToggle'

import { HomeWrapper } from './HomePage.styles'

const HomePage = () => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  const { inns, innsLoading, innsError } = useInns()
  const { isVisible: isListVisible, toggle: expandMap } = useToggle()

  return (
    <HomeWrapper isListVisible={isListVisible} isMobile={mobile}>
      <InnsList inns={inns} />
      <Map inns={inns} expandMap={expandMap} isListVisible={isListVisible} />
    </HomeWrapper>
  )
}

export default HomePage
