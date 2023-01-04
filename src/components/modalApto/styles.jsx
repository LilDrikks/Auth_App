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

export const ModalContainer = styled.div`
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
export const Moradores = styled.ul`
  margin: 20px;
  list-style: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid;
  height: 100%;
  max-height: 300px;
  button{
    position:static;
    align-self:center;
  }
  .button{
    p {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 14px;
    @media (max-width: 500px) {
      bottom: 110%;
      left: 50%;
    }
  }

  p::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
    @media (max-width: 500px) {
      top: 100%;
      left: 50%;
    }
  }

  &:hover p {
    visibility: visible;
    opacity: 1;
  }
  }

  li{
    border-bottom: 1px solid;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
      position:static;
    }
  }
`
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
