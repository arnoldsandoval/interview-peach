import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const ReactElement = React.createElement

const Flex = styled(({ tag, children, ...props }) =>
  ReactElement(tag, props, children)
)`
  display: flex;
  
  ${props =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
 
  ${props =>
    props.order &&
    css`
      order: ${props.order};
    `}

  ${props =>
    props.align &&
    css`
      align-items: ${props.align};
    `}

  ${props =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}

  ${props =>
    props.shrink &&
    css`
      flex-shrink: ${props.shrink};
    `}

    ${props =>
      props.grow &&
      css`
        flex-grow: ${props.grow};
      `}
 
`

Flex.defaultProps = { tag: 'div' }

export default Flex
