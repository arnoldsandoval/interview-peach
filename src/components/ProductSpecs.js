/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Heading, Row, Column } from 'aui/elements'
import { color } from 'aui/tokens'

const ProductSpecs = ({ specs }) => (
  <section
    css={css`
      border-top: 1px solid ${color.gray};
      border-bottom: 1px solid ${color.gray};
      padding-top: 2rem;
      padding-bottom: 2rem;
    `}>
    <Heading level={6}>Specifications</Heading>
    <Row tag="ul">
      {specs.map(({ label, value }, i) => (
        <Column xs={4} tag="li" key={i}>
          <div
            css={css`
              text-align: center;
            `}>
            <div
              css={css`
                font-weight: 800;
              `}>
              {value}
            </div>
            {label}
          </div>
        </Column>
      ))}
    </Row>
  </section>
)

export default ProductSpecs
