import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { defaults, cardHeader } from 'aui/tokens'
import { lighten } from 'polished'
const Card = styled.div`
  border: 1px solid ${({ theme: tokens }) => lighten('0.1', tokens.color.gray)};
  background: ${({ theme: tokens }) => tokens.color.white};
  box-shadow: ${({ theme: tokens }) => tokens.shadow.default};
  border-radius: ${({ theme: tokens }) => tokens.defaults.borderRadius};
  margin-bottom: 2rem;
`

const CardHeader = ({ theme = 'default', children }) => (
  <header
    css={css`
      padding: 0.8rem 2rem;
      text-transform: uppercase;
      font-size: 1.1rem;
      font-weight: bold;
      background: ${cardHeader.themes[theme].background};
      color: ${cardHeader.themes[theme].color};
      border-radius: ${defaults.borderRadius} ${defaults.borderRadius} 0 0;
    `}>
    {children}
  </header>
)

const CardBody = styled.div`
  padding: 2rem;
`

export { Card, CardHeader, CardBody }
