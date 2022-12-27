import styled from "styled-components"

export const Item = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  :hover{
    background-color: #ffffff49;
  }
  span {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5px;
  position: absolute;
  z-index: 1;
  bottom: 10%;
  left: 210%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 14px;
}

span::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

&:hover span {
  visibility: visible;
  opacity: 1;
}
`