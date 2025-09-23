import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { App } from './pages/App'

const GlobalStyle = createGlobalStyle`
    body * {
        box-sizing: border-box;
    }
`

const Main = (
    <>
        <GlobalStyle />
        <App />
    </>
)

render(Main, document.getElementById('app'))