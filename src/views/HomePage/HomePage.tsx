import { useMediaQuery, useTheme } from '@mui/material'
import { InnsList, Map, Transition } from '@/components/index'
import { useInns } from '@/hooks/useInns'
import { useToggle } from '@/hooks/useToggle'

import { DesktopHomeWrapper, MobileHomeWrapper } from './HomePage.styles'

const HomePage = () => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  const tablet = useMediaQuery(theme.breakpoints.down('md'))
  const desktop = useMediaQuery(theme.breakpoints.up('md'))
  const { inns, innsLoading, innsError } = useInns()
  const { isVisible: isListVisible, toggle: expandMap } = useToggle()
  return (
    <>
      {mobile && (
        <MobileHomeWrapper>
          <Map inns={inns} />
          <InnsList inns={inns} />
        </MobileHomeWrapper>
      )}
      {tablet && <div></div>}
      {desktop && (
        <DesktopHomeWrapper isListVisible={isListVisible}>
          <InnsList inns={inns} />
          <Map inns={inns} expandMap={expandMap} isListVisible={isListVisible} />
        </DesktopHomeWrapper>
      )}
    </>
  )
}

export default HomePage
