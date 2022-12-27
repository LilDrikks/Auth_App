import React from 'react'
import * as C from './styles'


const lista = [
  {
    bloco: 'A',
    aptos:[{ap:11},{ap:12}],
  },
  {
    bloco: 'B',
    aptos:[{ap:11},{ap:12}],
  }
  ]



function View(props) {

  return (
    <C.View>
      {props.text}
    </C.View>
  )
}

export default View