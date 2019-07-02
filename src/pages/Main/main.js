import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core'
import Header from './header'

const ChoosePizzaSize = React.lazy(() => import('../../pages/ChoosePizzaSize'))
const ChoosePizzaFlavours = React.lazy(() => import('../../pages/ChoosePizzaFlavours'))
const Main = () => {
  return (
    <>
      <Header />

      <Spacer />

      <Content>
        <Suspense fallback='Loading...'>
          <Switch>
            <Route path='/' exact component={ChoosePizzaSize} />
          </Switch>
        </Suspense>
      </Content>
    </>
  )
}

const Content = styled.main`
  padding: 20px;
`

const style = theme => ({
  main: theme.mixins.toolbar
})

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))

export default Main
