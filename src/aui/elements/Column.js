/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { mq } from '../mixins'

// TODO: Move to utils
const isObject = obj => typeof obj === 'object' && !Array.isArray(obj)

const handleSizeProp = (tokens, prop, breakpoint) => {
  const { columns, gutter } = tokens.layout

  const columnWidth = span => {
    return 100 / (columns / span)
  }

  const columnStyle = (span = 12, offset = 0, order) => `
      flex-basis: ${columnWidth(span)}%;
      max-width: ${columnWidth(span)}%;
      flex-wrap: wrap;
      margin-left: ${columnWidth(offset)}%;
      order:${order};
      padding: 0 ${gutter / 2}rem;
      list-style-type:none;
    `

  if (isObject(prop)) {
    const { span, offset = 0, order, size } = prop
    // Check for value on prop (offsets, order, size, gutter) and do something
    return mq[breakpoint]`${columnStyle(span, offset, order, size)}`
  } else {
    return mq[breakpoint]`${columnStyle(prop)}`
  }
}

const Col = props => {
  const { children, sm, md, lg, xl, tag, ...rest } = props

  let Tag = 'div'

  if (tag) {
    Tag = tag
  }

  const colStyle = tokens => css`
      ${handleSizeProp(tokens, props['xs'], 'xs')}
      ${sm && mq.sm`${handleSizeProp(tokens, props['sm'], 'sm')}`}
      ${md && mq.md`${handleSizeProp(tokens, props['md'], 'md')}`}
      ${lg && mq.lg`${handleSizeProp(tokens, props['lg'], 'lg')}`}
      ${xl && mq.xl`${handleSizeProp(tokens, props['xl'], 'xl')}`}
    `

  return (
    <Tag css={colStyle} {...rest}>
      {children}
    </Tag>
  )
}

export default Col
