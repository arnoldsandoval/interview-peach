import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const ReactElement = React.createElement

const Truncate = styled(({ tag, children, ...props }) =>
  ReactElement(tag, props, children)
)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `}
`

Truncate.defaultProps = {
  tag: 'div'
}

export default Truncate
