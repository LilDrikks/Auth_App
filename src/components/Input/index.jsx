import React from 'react'
import * as C from "./styles"

const Input = ({ type, placeholder, value, onChange, maxLength}) => {
  return <C.Input
  type={type}
  placeholder={placeholder}
  value={value}
  onChange={onChange}
  maxLength={maxLength}
  />;
}

export default Input;