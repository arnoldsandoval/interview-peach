/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Flex, Container, Row, Column } from 'aui/elements'

const Header = ({ children }) => (
  <Flex
    tag="header"
    css={({ header }) => css`
      justify-content: space-between;
      background: ${header.background};
      color: ${header.color};
      margin: 0 0 2rem;
      padding: 2rem 0 1.6rem;
    `}>
    <Container>
      <Row>
        <Column>
          <Flex justify="space-between">
            <a
              css={({ header }) => css`
                font-weight: 600;
                font-size: ${header.fontSizeTitle}rem;
                text-decoration: none;
                color: ${header.color};
              `}
              href="/">
              Widget Depot
            </a>
            {children}
          </Flex>
        </Column>
      </Row>
    </Container>
  </Flex>
)

export default Header
