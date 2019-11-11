import { css } from '@emotion/core'

export const visuallyHidden = css`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
`

export const uppercase = css`
  text-transform: uppercase;
`

export const weight = weight => css`
  font-weight: ${weight};
`
