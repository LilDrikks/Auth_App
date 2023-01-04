import React, { useState } from 'react'
import * as C from './styles'
import * as D from '../ItensSideBar/styles'
import {x} from 'react-icons-kit/feather/x'
import Icon from 'react-icons-kit'
import useAuth from '../../hooks/useAuth'

function Modal() {
  
  const { setModal, moradores } = useAuth()
  console.log(moradores[2][1])
  return (
    <C.ModalApto>
      <C.Moradores>
        <C.Apto>
          <span>
          {moradores[0]}
          </span>
          <span>
          {moradores[1]}
          </span>
        </C.Apto>

        <D.Item style={{width:'40px', height: '40px'}} onClick={() => setModal(false)} >
          <Icon icon={x} size={20} style={{color:'black'}} />
        </D.Item>
      </C.Moradores>
    </C.ModalApto>
  )
}

export default Modal