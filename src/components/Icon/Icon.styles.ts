import { css } from 'styled-components'
import { rem } from '../../utils/rem'
import styled from '../../utils/styled'
import { IconStylesProps } from './Icon.types'

export const IconWrapper = styled.span<IconStylesProps>`
  display: inline-block;
  width: ${(props) => (props.size ? rem(props.size) : rem(28))};
  height: ${(props) => (props.size ? rem(props.size) : rem(28))};
  line-height: 0; /* So the icon doesn't move a little lower */

  & > svg {
    transform: ${(props) => props.reverse && 'rotate(180deg)'};
    width: 100%;
    height: 100%;

    & path,
    & polygon {
      fill: ${(props) => props.color};
    }

    & g[fill='none'] > :not([fill]) {
      stroke: ${(props) => props.color};
    }
  }

  ${(props) =>
    !!props.onClick &&
    css`
      cursor: pointer;
    `}
`
