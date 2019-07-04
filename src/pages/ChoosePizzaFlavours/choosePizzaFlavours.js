import React from 'react'
import styled from 'styled-components'
import t from 'prop-types'
import {
  Grid,
  Typography
} from '@material-ui/core'

const ChoosePizzaFlavours = ({ location }) => {
  console.log(location)
  return (
    <>
      <Grid container direction='column' alignItems='center'>
        <Title variant='h3'>
          O que vai ser hoje
        </Title>
        <Title variant='h4'>Escolha o sabor da pizza:</Title>
      </Grid>
    </>
  )
}

const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
