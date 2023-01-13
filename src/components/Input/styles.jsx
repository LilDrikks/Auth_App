import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 90%;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ebe8e8;
  border: none;
  color: black;
  &::placeholder{
    color: #747272;
  }
  &:focus{
    background-color: #747272;
    &::placeholder{
    color: white;
  }
  }
`;