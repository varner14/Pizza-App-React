import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from '../../assets/svg/logo-react-zzaria.svg'
import siteImage from '../../assets/images/pizza.jpg'

import { AuthContext } from '../../contexts/auth'

function Login () {
  const { login } = useContext(AuthContext)

  return (
    <Container>
      <LeftContainer />
      <RightContainer>
        <LoginContainer container justify='center' spacing={5}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item xs={12} container justify='center'>
            <GitHubButton onClick={login}>Entrar com GitHub</GitHubButton>
          </Grid>
        </LoginContainer>
      </RightContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

const LoginContainer = styled(Grid)`
    margin: 0;
    position: relative;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`

const LeftContainer = styled.div`
  width: 50%;
  float: left;
  height: 100vh;
  background-image: url(${siteImage});
`

const RightContainer = styled.div`
  width: 50%;
  height: 100vh;
  float: right;
  background: ${({ theme }) => theme.palette.primary.main};
`

const Logo = styled(MainLogo)`
  width: 100%;
  & path {
    color: #fff;
    fill: #fff;
  }
  & line {
    stroke: #fff;
  }
`
const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: ${({ theme }) => theme.typography.h5.fontSize}
    background: linear-gradient(220deg, rgba(255,255,255,1) 0%, rgba(224,190,102,1) 0%, rgba(255,214,0,0.9780287114845938) 100%);
    max-width: 480px;
    padding: ${({ theme }) => theme.spacing(2)}px;
    color: #fff;
    text-transform: none;
  }
`
export default Login
