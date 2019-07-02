import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core'
import Header from './header'

import { HOME, CHOOSE_PIZZA_FLAVOURS } from '../../routes'

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
            <Route path={HOME} exact component={ChoosePizzaSize} />
            <Route path={CHOOSE_PIZZA_FLAVOURS} exact component={ChoosePizzaFlavours} />
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
