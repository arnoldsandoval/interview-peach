/** @jsx jsx */
import { Component } from 'react'
import { jsx, css } from '@emotion/core'
import { outline } from '../mixins'
import { darken } from 'polished'

const buttonBase = (tokens, size, block) => css`
  display: ${block ? 'block' : 'inline-block'};
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: ${tokens.buttons.sizes[size].padding};
  font-size: ${tokens.buttons.sizes[size].fontSize};
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  ${block &&
    css`
      width: 100%;
      margin-bottom: 0.6rem; /* TODO: Move to tokens?  */
    `}
`

const buttonTheme = (tokens, theme, outlined) => css`
  &:focus {
    ${outline(tokens.buttons.themes[theme].outline)}
  }

  ${!outlined &&
    css`
      background: ${tokens.buttons.themes[theme].background};
      color: ${tokens.buttons.themes[theme].color};
      border-radius: ${tokens.buttons.themes[theme].borderRadius};
      border: ${tokens.buttons.themes[theme].border};

      &:hover,
      &:focus {
        background: ${tokens.buttons.themes[theme].background};
      }

      &:active {
        background: ${tokens.buttons.themes[theme].background};
      }
    `}

  ${outlined &&
    css`
      border-color: ${tokens.buttons.themes[theme].border};
      color: ${tokens.buttons.themes[theme].outline};
      border-radius: ${tokens.buttons.themes[theme].borderRadius};

      &:hover,
      &:focus {
        background: ${darken(0.1, tokens.buttons.themes[theme].background)};
        color: ${tokens.buttons.themes[theme].color};
      }
      &:active {
        background: ${darken(0.2, tokens.buttons.themes[theme].background)};
        color: ${tokens.buttons.themes[theme].color};
      }
    `}
`

class Button extends Component {
  onClick = event => {
    const { disabled, onClick } = this.props
    if (disabled) {
      event.preventDefault()
      return
    }

    if (onClick) {
      this.props.onClick()
    }
  }

  render() {
    const {
      size = 'md',
      theme = 'default',
      active,
      ariaLabel,
      block,
      outline,
      disabled,
      tag,
      onClick,
      children,
      className,
      close,
      style,
      ...rest
    } = this.props

    let Tag = 'button'

    if (tag) {
      Tag = tag
    }
    return (
      <Tag
        onClick={e => this.onClick(e)}
        css={tokens => [
          buttonBase(tokens, size, block),
          buttonTheme(tokens, theme, outline),
          style
        ]}
        {...rest}>
        {children}
      </Tag>
    )
  }
}

export default Button
