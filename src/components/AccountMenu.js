/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { visuallyHidden } from 'aui/styles'
import { Button } from 'aui/elements'
import { Icon } from './index'

const AccountMenu = () => (
  <div>
    <Button
      style={css`
        padding: 0.6rem 0.8rem 0;
      `}
      theme="inverse">
      <span css={visuallyHidden}>Account</span>{' '}
      <span aria-hidden="true">
        <Icon glyph="user" />
      </span>
    </Button>
  </div>
)

export default AccountMenu
