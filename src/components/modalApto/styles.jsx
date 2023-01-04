import styled from "styled-components";

export const ModalApto = styled.div`
  background-color: #00000075;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
`;
export const Apto = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor:default;
  width: 44px;
  height: 44px;
  margin: 10px;
  border: 2px solid;
  background-color: #eee;
  border-radius: 50%;
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.07),
    5px 5px 10px rgba(0, 0, 0, 0.05), 15px 20px 20px rgba(0, 0, 0, 0.05),
    inset -10px -10px 15px rgba(255, 255, 255, 0.9);
  &::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    left: 22px;
    top: 8px;
    background-color: white;
  }
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: 8px;
    top: 4px;
    background-color: rgba(255, 255, 255, 0.5);
  }

  :hover {
    background-color: #d6d6d6d8;
  }
`;
