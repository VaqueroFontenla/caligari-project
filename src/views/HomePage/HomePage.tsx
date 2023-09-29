import { useMediaQuery, useTheme } from '@mui/material'
import { InnsList, Map, Spinner } from '@/components/index'
import { useInns } from '@/hooks/useInns'
import { useToggle } from '@/hooks/useToggle'

import { DesktopHomeWrapper, MobileHomeWrapper } from './HomePage.styles'

const HomePage = () => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  const desktop = useMediaQuery(theme.breakpoints.up('md'))
  const { inns, innsLoading, innsError } = useInns()
  const { isVisible: isListVisible, toggle: expandMap } = useToggle(true)

  if (innsLoading) {
    return <Spinner />
  }
  return (
    <>
      {mobile && (
        <MobileHomeWrapper>
          <Map inns={inns} />
          <InnsList inns={inns} />
        </MobileHomeWrapper>
      )}
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
