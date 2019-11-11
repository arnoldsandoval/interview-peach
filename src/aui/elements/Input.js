/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { outline } from '../mixins'

const inputBase = (tokens, size, block) => css`
  display: ${block ? 'block' : 'inline-block'};
  font-weight: 400;
  user-select: none;
  background-color: transparent;
  border: 2px solid transparent;
  padding: ${tokens.inputs.sizes[size].padding};
  font-size: ${tokens.inputs.sizes[size].fontSize};
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
  margin-bottom: 0.6rem; /* TODO: Move to tokens?  */
`

const inputTheme = (tokens, theme) => css`
  &:focus {
    ${outline(tokens.color.blue)}
    border-color: ${tokens.inputs.themes[theme].focus.borderColor};
  }

  border-width: ${tokens.inputs.themes[theme].borderWidth};
  border-color: ${tokens.inputs.themes[theme].borderColor};
  color: ${tokens.inputs.themes[theme].color};
  border-radius: ${tokens.inputs.themes[theme].borderRadius};

  &:active {
    background: ${tokens.inputs.themes[theme].background};
    color: ${tokens.inputs.themes[theme].color};
  }
`

const Input = ({ label, theme, block, size, style, ...rest }) => {
  return (
    <>
      <label
        css={css`
          display: block;
          padding-bottom: 0.5rem;
        `}>
        {label}
      </label>
      <input
        css={tokens => [
          inputBase(tokens, size, block),
          inputTheme(tokens, theme),
          style
        ]}
        {...rest}
      />
    </>
  )
}

Input.defaultProps = {
  size: 'md',
  theme: 'default'
}

export default Input
