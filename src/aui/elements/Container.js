/** @jsx jsx */
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Container = styled.div`
  width: 100%;
  max-width: ${({ theme: tokens }) => tokens.layout.containerMaxWidth}rem;
  margin: 0 auto;

  ${props =>
    props.full &&
    css`
      max-width: none;
    `}
`

export default Container
