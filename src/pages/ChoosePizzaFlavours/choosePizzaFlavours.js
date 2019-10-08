import React from 'react'
import { Redirect } from 'react-router-dom'
import t from 'prop-types'
import styled from 'styled-components'
import { H4, HeaderContent, PizzasGrid, Divider, CardLink } from '../../ui'
import { singleOrPlural } from '../../utils'
import { HOME } from '../../routes'
import pizzaFlavours from '../../mocks/pizzaFlavours'
import { Grid, Card, Typography } from '@material-ui/core'

const ChoosePizzaFlavours = ({ location }) => {
  console.log(location)
  if (!location.state) {
    return <Redirect to={HOME} />
  }
  const { flavours, id } = location.state

  return (
    <>
      <HeaderContent>
        <H4 >Escolha até {flavours} {' '} {singleOrPlural(flavours, 'sabor', 'sabores')}:</H4>
      </HeaderContent>

      <PizzasGrid >
        {pizzaFlavours.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <Label>
                <input type='checkbox' />
                <Img src={pizza.image} alt={pizza.name} />
                <Divider />

                <Typography>
                  {pizza.name}
                </Typography>
                <Typography variant='h5'>
                  {pizza.value[id]}
                </Typography>
              </Label>
            </Card>

          </Grid>
        ))}

      </PizzasGrid>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

const Label = styled(CardLink).attrs({
  component: 'label'
})``

const Img = styled.img`
  width: 200px;
`

export default ChoosePizzaFlavours
