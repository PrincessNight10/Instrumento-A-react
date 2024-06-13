import React from 'react'

import { Card } from '../Card/Card'
//3. definido ruta de card
export const Welcome = ({ ficha }) => {
  return (
    <>
      <h1>instrumento de evaluación</h1>
      <h2>Ficha: {ficha} </h2>
      <a className='into' href="">Ingresar</a>
      <Card/>

    </>
  )
}
