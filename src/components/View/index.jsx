import React from 'react'
import * as C from './styles'

function View(props) {

  return (
    <C.View>
      {props.text}
    </C.View>
  )
}

export default View