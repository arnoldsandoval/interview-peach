/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { mq } from 'aui/mixins'
import { Button, Heading, Card, CardBody, Flex } from 'aui/elements'
import { visuallyHidden, uppercase } from 'aui/styles'
import { ProductSpecs, Icon } from './index'

const ProductDetail = ({
  onAddToCart,
  product: { name, specs, description, img }
}) => {
  return (
    <Card>
      <CardBody>
        <Flex justify="space-between">
          <Heading level={1} css={uppercase}>
            {name}
          </Heading>
          <div>
            <Button theme="link" onClick={onAddToCart}>
              <div css={visuallyHidden}>Add to Cart</div>
              <span
                aria-hidden="true"
                css={css`
                  display: block;
                  padding-top: 0.8rem;
                `}>
                <Icon glyph="cart" />
              </span>
            </Button>
          </div>
        </Flex>
        <figure>
          <img
            srcSet={`${img.src.x1},
             ${img.src.x2} 2x`}
            src={img.src.x1}
            alt={img.alt}
            width="560px"
          />
        </figure>
        <ProductSpecs specs={specs} />
        <section>
          <Heading level={3} visualLevel={6} css={visuallyHidden}>
            Product Description
          </Heading>

          <p
            css={css`
              font-size: 1rem;
              ${mq.lg`padding: 2rem 6.6rem;`}
            `}>
            {description}
          </p>
        </section>
      </CardBody>
    </Card>
  )
}

export default ProductDetail
