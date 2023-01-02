import React, { useState } from 'react'
import * as C from './styles'
import * as D from '../ItensSideBar/styles'
import {x} from 'react-icons-kit/feather/x'
import Icon from 'react-icons-kit'
import useAuth from '../../hooks/useAuth'

function Modal() {
  const { setModal, moradores } = useAuth()

  const changeNome = (value, index) => {
    let newMoradores = moradores
    newMoradores[2][index] = value
    console.log(newMoradores[2][index]);
  }

  return (
    <C.ModalApto>
      <C.Moradores>
        <div>{moradores[0]}{moradores[1]}</div>
        {moradores[2].map((nome, index) => <input key={index} type={'text'} value={nome.nome} onChange={(e) => changeNome(e.target.value, index)} />)}
        <D.Item style={{width:'40px', height: '40px'}} onClick={() => setModal(false)} >
          <Icon icon={x} size={20} style={{color:'black'}} />
        </D.Item>
      </C.Moradores>
    </C.ModalApto>
  )
}

export default Modal