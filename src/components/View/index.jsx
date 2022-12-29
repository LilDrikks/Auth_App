import React, { useState } from 'react'
import * as C from './styles'
import { data } from '../../requests/axios'
import Input from '../Input'


export function View1() {
  const [filter, setFilter] = useState('')

  const aptoFilter = data[0].aptos.filter((apto) => (String(apto.apto).includes(filter) || apto.moradores.includes(filter)))
  
  return (
    <C.View>
      <C.Subtitle>
        Lista de moradores
      </C.Subtitle>
      <C.Subtitle>Bloco: {data[0].bloco}</C.Subtitle>
      <C.Filter>
        <Input
            type="text"
            placeholder="Número do Ap..."
            value={filter}
            onChange={(e) => [setFilter(e.target.value)]}
            maxLength={20}
        />
      </C.Filter>
      <C.containerAptos>
        {
          aptoFilter.map((apto, index) => (
            <C.CardApto  key={index}>
              <h3>Apto {apto.apto}</h3>
              {apto.moradores.map((morador, index) => <p key={index}>{morador}</p>)}
            </C.CardApto>
          ))
        }
      </C.containerAptos>
    </C.View>
  )
}
export function View2() {

  return (
    <C.View>
      <C.Subtitle>
        Notificação de encomendas
      </C.Subtitle>
    </C.View>
  )
}
export function View3() {

  return (
    <C.View>
      <C.Subtitle>
        Alertas e reclamações
      </C.Subtitle>
    </C.View>
  )
}
export function View4() {

  return (
    <C.View>
      <C.Subtitle>
        Lista de reserva e eventos
      </C.Subtitle>
    </C.View>
  )
}