import React from 'react'
import { hot } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core'
import AuthProvider from './contexts/auth'
import App from './App'
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#990000'
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00'
    }
    // error: will use the default color
  }
})
console.log(theme)

function Root () {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme} >
        <AuthProvider>
          <CssBaseline />
          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default hot(module)(Root)
