import styled from "styled-components";

export const ModalApto = styled.div`
background-color: #00000075;
position: fixed;
top:0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const Moradores = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 5px;
  background-color: white;
  position: relative;
  button {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`