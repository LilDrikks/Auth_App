import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  background-color: rgb(50,111,170);
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  &:hover{
    background-color:#2866a5;
  }
  @media (max-width: 1200px) {
      width:100px;
  }
`;