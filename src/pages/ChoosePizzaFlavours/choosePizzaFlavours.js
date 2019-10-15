import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import t from 'prop-types'
import styled from 'styled-components'
import { H4, HeaderContent, PizzasGrid, Divider, CardLink } from '../../ui'
import { singleOrPlural } from '../../utils'
import { HOME } from '../../routes'
import pizzaFlavours from '../../mocks/pizzaFlavours'
import { Grid, Card as MaterialCard, Typography } from '@material-ui/core'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({

  }))

  console.log(checkboxes)

  if (!location.state) {
    return <Redirect to={HOME} />
  }
  const { flavours, id } = location.state

  const handlechangeCheckbox = (pizzaId) => (e) => {
    if (checkboxChecked(checkboxes).length === flavours && e.target.checked === true) {
      return
    }

    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    })
  }

  return (
    <>
      <HeaderContent>
        <H4 >Escolha até {flavours} {' '} {singleOrPlural(flavours, 'sabor', 'sabores')}:</H4>
      </HeaderContent>

      <PizzasGrid >
        {pizzaFlavours.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card checked={!!checkboxes[pizza.id]}>
              <Label>
                <CheckBox
                  type='checkbox'
                  checked={!!checkboxes[pizza.id]}
                  onChange={handlechangeCheckbox(pizza.id)}
                />
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

function checkboxChecked (checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
}

const Card = styled(MaterialCard)`
  border: 2px solid transparent;
  border-color:${({ theme, checked }) => checked ? theme.palette.primary.main : ''}
`

const Label = styled(CardLink).attrs({
  component: 'label'
})``
const CheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

const Img = styled.img`
  width: 200px;
`

export default ChoosePizzaFlavours
