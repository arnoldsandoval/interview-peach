/** @jsx jsx */

import { css } from '@emotion/core'
import { breakpoints } from '../tokens'

const mq = Object.keys(breakpoints).reduce((acc, label) => {
  if (acc === 'landscape' || acc === 'portrait') {
    acc[label] = (...args) => css`
      @media screen and (orientation: ${acc}) {
        ${css(...args)};
      }
    `
  } else if (acc === 'retina') {
    acc[label] = (...args) => css`
      @media screen and (screen and (-webkit-min-device-pixel-ratio: 2), screen and  (min-resolution: 2dppx)) {
        ${css(...args)};
      }
    `
  } else {
    acc[label] = (...args) => {
      if (label === 'xs') {
        return css(...args)
      } else {
        return css`
          @media (min-width: ${breakpoints[label]}px) {
            ${css(...args)};
          }
        `
      }
    }
  }
  return acc
}, {})

export default mq
