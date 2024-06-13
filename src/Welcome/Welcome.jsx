import React from 'react'

import { Card } from '././Card'

export const Welcome = ({ ficha }) => {
  return (
    <>
      <h1>instrumento de evaluación</h1>
      <h2>Ficha: {ficha} </h2>
      <a className='into' href="{Card}">Ingresar</a>
    </>
  )
}
