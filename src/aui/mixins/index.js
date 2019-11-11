import { css } from '@emotion/core'
import { transparentize } from 'polished'
import mq from './mq'
import { defaults } from '../tokens'

// TODO: stop being lazy and themify this
const outline = (outlineColor = defaults.outlineColor) => css`
  outline: none;
  box-shadow: 0 0 0 0.2rem #fff,
    0 0 0 0.4rem ${transparentize(0.3, outlineColor)};
`

export { mq, outline }
