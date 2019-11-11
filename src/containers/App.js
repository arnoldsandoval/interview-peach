/** @jsx jsx */
import React, { useEffect } from 'react'
import { AccountMenu, Header, ProductDetail, ProductList } from 'components'
import { Store } from 'store'
import { Container, Row, Column, Flex, Input } from 'aui/elements'
import { jsx, css } from '@emotion/core'
import { shadow } from 'aui/tokens'

const App = () => {
  const { state, dispatch } = React.useContext(Store)

  const handleProductSelection = product => {
    dispatch({
      type: 'SET_ACTIVE_PRODUCT',
      payload: product
    })
  }

  const handleCartAdd = product => {
    dispatch({
      type: 'CART_ADD',
      payload: product
    })
  }

  const setProductList = event => {
    const value = event.target.value

    dispatch({
      type: 'FILTER_PRODUCT_LIST',
      query: value
    })
  }

  // The following is akin to `componentDidMount`
  // we're basically loading our data in to our component.

  useEffect(() => {
    dispatch({
      type: 'SET_PRODUCT_LIST'
    })

    dispatch({
      type: 'SET_ACTIVE_PRODUCT'
    })
  }, [dispatch])

  return (
    <>
      <Header>
        <Flex>
          <AccountMenu />
        </Flex>
      </Header>

      <Container id="content" role="main">
        <Row
          css={css`
            margin: 2rem 0;
          `}>
          <Column>
            <Input
              label="Filter products by name"
              placeholder="e.g. Widget 2"
              style={css`
                box-shadow: ${shadow.default};
              `}
              onChange={setProductList}
            />
          </Column>
        </Row>
        <Row aria-live="polite">
          <Column md={3}>
            <ProductList
              searchQuery={state.searchQuery}
              onProductSelection={handleProductSelection}
              products={state.products}
            />
          </Column>
          <Column md={9}>
            <ProductDetail
              onAddToCart={() => handleCartAdd(state.selectedProduct)}
              product={state.selectedProduct}
            />
          </Column>
        </Row>
      </Container>
    </>
  )
}

export default App
