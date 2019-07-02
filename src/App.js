import React, { lazy, useEffect, useContext, Suspense, useState } from 'react'
import t from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from './services/firebase'
import { AuthContext } from './contexts/auth'

import { HOME, LOGIN } from './routes'

const MainPage = lazy(() => import('./pages/Main'))
const Login = lazy(() => import('./pages/Login'))

function App ({ location }) {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const [DidCheckUserIn, setDidCheckUserIn] = useState(false)
  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          firstName: user.displayName ? user.displayName.split(' ')[0] : 'visitante'
        }
      })
      setDidCheckUserIn(true)
    })
  }, [setUserInfo])

  if (!DidCheckUserIn) {
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />
  }

  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
