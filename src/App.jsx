import './App.css'

import React from 'react'
import { Card } from './Card/Card'
import { Welcome } from './Welcome/Welcome'

import {Error} from './Error/Error'
//se creo la ruta para acceder al welcome
export const App = () => {
  return (
    <>
    
          <Welcome />
          </>

    <'Error'content{Error}/>
  )
}
