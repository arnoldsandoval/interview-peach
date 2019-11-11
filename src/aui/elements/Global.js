import React from 'react'
import { Global as EmotionGlobal } from '@emotion/core'
// eslint-disable-next-line
import normalize from 'normalize.css'
import { transparentize } from 'polished'

const Global = ({ styles = '' }) => {
  return (
    <EmotionGlobal
      styles={themeTokens => `
        * {
          box-sizing: border-box;
        }

        html {
          font-size: ${themeTokens.type.baseFontSize}; 
          font-family: ${themeTokens.type.fontSerif}; 
        }

        body {
          font-size: ${themeTokens.type.baseFontSizePx};
          font-size: ${themeTokens.type.baseFontSizeRem};
          line-height: ${themeTokens.type.baseLineHeight};
          color: ${themeTokens.type.fontColor};
        }

        a {
          color: ${themeTokens.type.linkColor};
          text-decoration-color: ${themeTokens.type.linkColor};
          text-decoration-thickness: 0.13rem;
          text-underline-offset: 0.2rem;
        
          &:focus {
            outline: none;
            box-shadow: 0 0 0 0.2rem #fff,
              0 0 0 0.4rem ${transparentize(
                0.3,
                themeTokens.defaults.outlineColor
              )};
          }
        }

        img {max-width: 100%;}

        ${styles}
      `}
    />
  )
}

export default Global
