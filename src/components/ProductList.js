/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { Button, Truncate } from 'aui/elements'
import { uppercase, weight } from 'aui/styles'
import { integerToCurrency } from 'utils'
import { shadow } from 'aui/tokens'
import { Icon } from './index'

const listStyle = css`
  margin: 0;
  padding: 0;
  position: sticky;
  top: 2rem;
  margin-bottom: 3rem;
  li {
    list-style-type: none;
  }
`

const ProductList = ({ products, searchQuery, onProductSelection }) => {
  const noProducts = products.length === 0

  return (
    <>
      <ul css={listStyle}>
        {products.map(product => {
          const { name, cost } = product
          return (
            <li key={product.id}>
              <Button
                block
                onClick={() => onProductSelection(product)}
                style={css`
                  padding: 1.3rem 2rem;
                  text-align: left;
                  box-shadow: ${shadow.default};
                  display: flex;
                  align-items: center;
                `}>
                <div
                  css={css`
                    flex: 1;
                  `}>
                  <div css={[uppercase, weight('700')]}>{name}</div>
                  <div>
                    <div
                      css={css`
                        font-size: 1.1rem;
                        margin-top: 1rem;
                      `}>
                      Price
                    </div>
                    {integerToCurrency(cost)}
                  </div>
                </div>
                <Icon glyph="arrowRight" width="1.6rem" />
              </Button>
            </li>
          )
        })}

        {noProducts && (
          <div
            css={css`
              text-align: center;
            `}>
            <span
              role="img"
              aria-label="Sad face with big teary eyes."
              css={css`
                font-size: 6rem;
              `}>
              🥺
            </span>
            <p
              css={css`
                margin-top: 0;
              `}>
              No products found matching your query:
            </p>
            <strong>
              <em>
                <Truncate maxWidth="calc(100%-3rem)">{searchQuery}</Truncate>
              </em>
            </strong>
          </div>
        )}
      </ul>
    </>
  )
}

export default ProductList
