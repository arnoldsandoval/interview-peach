/** @jsx jsx */

import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { layout } from '../tokens'

const ReactElement = React.createElement

const Row = styled(({ tag, children, ...props }) =>
  ReactElement(tag, props, children)
)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  ${({ gutterless }) =>
    !gutterless &&
    css`
      padding: 0 ${layout.gutter / 2}rem;
    `}

    /** This comes from Flex, should find a way to repurpose. */
    
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

Row.defaultProps = {
  tag: 'div'
}

export default Row
