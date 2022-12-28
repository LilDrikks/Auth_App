import React from 'react'
import * as C from './styles'
import { data } from '../../requests/axios'

export function View1(props) {
  
  
  return (
    <C.View>
      <C.Subtitle>
        Lista de moradores
      </C.Subtitle>
      <C.Subtitle>Bloco: {data[0].bloco}</C.Subtitle>
      <C.containerAptos>
        {
          data[0].aptos.map((apto, index) => <C.RowApto  key={index}>
            <h3>Apto {apto.apto}</h3>
            {apto.moradores.map((morador, index) => <p key={index}>{morador}</p>)}
          </C.RowApto>
          )
        }
      </C.containerAptos>
    </C.View>
  )
}
export function View2(props) {

  return (
    <C.View>
      <C.Subtitle>
        Notificação de encomendas
      </C.Subtitle>
    </C.View>
  )
}
export function View3(props) {

  return (
    <C.View>
      <C.Subtitle>
        Alertas e reclamações
      </C.Subtitle>
    </C.View>
  )
}
export function View4(props) {

  return (
    <C.View>
      <C.Subtitle>
        Lista de reserva e eventos
      </C.Subtitle>
    </C.View>
  )
}