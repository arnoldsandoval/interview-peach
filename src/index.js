import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from 'containers/App'
import * as serviceWorker from './serviceWorker'
import { StoreProvider } from './store'
import { ThemeProvider } from 'emotion-theming'
import 'typeface-montserrat'

import { Global } from 'aui/elements'

import {
  color,
  layout,
  defaults,
  breakpoints,
  type,
  buttons,
  inputs,
  shadow
} from 'aui/tokens'

const theme = {
  color: { ...color, blue: '#578bd5' },
  defaults: { ...defaults },
  layout: { ...layout, containerMaxWidth: 98, gutter: 2 },
  breakpoints: { ...breakpoints },
  type: { ...type, fontColor: '#333', linkColor: color.blue },
  buttons: {
    ...buttons,
    themes: {
      ...buttons.themes,
      default: {
        ...buttons.themes.default,
        border: 'none',
        background:
          'linear-gradient(90deg, rgba(0,0,0,.1) 0%, rgba(0,0,0,.06) 100%);',
        color: 'rgba(0,0,0,.8)'
      }
    }
  },
  inputs: {
    ...inputs,
    themes: {
      ...inputs.themes,
      default: {
        ...inputs.themes.default,
        borderWidth: '1px'
      }
    }
  },
  shadow: { ...shadow },
  header: {
    fontSizeTitle: 2,
    background: '#578bd5',
    color: 'white'
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global />
    <StoreProvider>
      <div className="container">
        <AppContainer />
      </div>
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
