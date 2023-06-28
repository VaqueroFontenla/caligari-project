import React, { FC } from 'react'
import { Slide, SlideProps } from '@mui/material'

interface TranstionProps {
  transtionIn: boolean
  direction?: SlideProps['direction']
  children: React.ReactElement<any, any>
}

export const Transition: FC<TranstionProps> = ({ transtionIn, direction, children }) => (
  <Slide
    direction={direction || 'right'}
    in={transtionIn}
    mountOnEnter
    unmountOnExit
    timeout={1000}
  >
    <div>{children}</div>
  </Slide>
)
