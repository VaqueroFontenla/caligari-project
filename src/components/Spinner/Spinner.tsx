import { styled, Box, CircularProgress, useTheme } from '@mui/material'

export const SpinnerWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

export const Spinner = () => {
  const theme = useTheme()
  return (
    <SpinnerWrapper>
      <CircularProgress size={theme.spacing(20)} />
    </SpinnerWrapper>
  )
}
