import React from 'react'
import { ReactComponent as IconCart } from '../images/icon-cart.svg'
import { ReactComponent as IconUser } from '../images/icon-user.svg'
import { ReactComponent as IconArrowRight } from '../images/icon-right.svg'

const iconMap = {
  cart: IconCart,
  user: IconUser,
  arrowRight: IconArrowRight
}

const Icon = ({ glyph, ...rest }) => {
  const Svg = iconMap[glyph]
  return <Svg {...rest} />
}

export default Icon
