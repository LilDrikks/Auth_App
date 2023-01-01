import React, { useState } from 'react'
import * as C from './styles'
import Input from '../Input'
import useAuth from "../../hooks/useAuth"

export function View1() {
  const {data} = useAuth();
  const [filter, setFilter] = useState('')

  const filtro = (apto, nome) => 
  apto.moradores.some((morador) => morador.nome.toLowerCase().includes(nome.toLowerCase()))
  || String(apto.apto).includes(filter)

  const aptoFilter = data
    .filter((apto) => filtro(apto, filter))

  return (
    <C.View>
      <C.Subtitle>Lista de moradores</C.Subtitle>
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
        {aptoFilter.map((apto, index) => (
          <C.CardApto key={index}>
            <h3>{apto.apto} {apto.bloco}</h3>
            {apto.moradores.map((morador, index) => (
              <p key={index}>{morador.nome}</p>
            ))}
          </C.CardApto>
        ))}
      </C.containerAptos>
    </C.View>
  )
}
export function View2() {
  return (
    <C.View>
      <C.Subtitle>Notificação de encomendas</C.Subtitle>
    </C.View>
  )
}
export function View3() {
  return (
    <C.View>
      <C.Subtitle>Alertas e reclamações</C.Subtitle>
    </C.View>
  )
}
export function View4() {
  return (
    <C.View>
      <C.Subtitle>Lista de reserva e eventos</C.Subtitle>
    </C.View>
  )
}
