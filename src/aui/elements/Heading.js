/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { mq } from '../mixins'

const headingStyle = (tokens, level) => css`
  ${mq.xs` 
    font-size: ${tokens.type[level]['xs'].size};
    margin: ${tokens.type[level]['xs'].margin};
   `}
  ${mq.sm` 
   font-size: ${tokens.type[level]['sm'].size};
   margin: ${tokens.type[level]['sm'].margin};
  `}
  ${mq.md` 
    font-size: ${tokens.type[level]['md'].size};
    margin: ${tokens.type[level]['md'].margin};
  `}
    ${mq.lg` 
    font-size: ${tokens.type[level]['lg'].size};
    margin: ${tokens.type[level]['lg'].margin};
  `}
    ${mq.xl` 
    font-size: ${tokens.type[level]['xl'].size};
    margin: ${tokens.type[level]['xl'].margin};
  `}
`

const Heading = ({ level, visualLevel, children, ...rest }) => {
  const Tag = `h${level}`

  if (!visualLevel) {
    visualLevel = level
  }

  return (
    <Tag css={tokens => headingStyle(tokens, visualLevel)} {...rest}>
      {children}
    </Tag>
  )
}

export default Heading
