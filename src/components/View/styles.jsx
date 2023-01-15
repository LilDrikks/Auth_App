import styled from "styled-components";
import background from "/src/background.jpg";


export const View = styled.main`
  width: 100%;
  margin: 20px 20px 0px 0px;
  border-radius: 5px;
  height: 100%;
  background-color: white;
  color: black;
  @media (max-width: 500px) {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;
export const Subtitle = styled.h2`
  margin: 10px;
  font-size: 34px;
  align-self: center;
`;

export const CardApto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  color: white;
  padding: 10px;
  flex-grow: 1;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    background: linear-gradient(
      135deg,
      rgba(43, 42, 42, 0.568),
      rgba(255, 255, 255, 0)
    );
  }
  div {
    width: 100%;
  }
  p {
    padding: 4px;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  .edit,.add{
      width: 32px;
      height: 32px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 100px;
      &:hover{
        cursor: pointer;
      }
  }
  .add{
    transform: rotate(45deg);
  }
`;

export const containerAptos = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  background-image: url(${background});
  @media (max-width: 500px) {
    height: 540px;
    overflow: scroll;
  }
  .notificacao{
    position: fixed;
    width: 100vw;
    align-self: center;
    top: 50vw;
    right: 0;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px;
  input {
    width: 300px;
  }
  input:focus {
    color: white;
  }
  @media (max-width: 500px) {
    align-self: center;
  }
`;

export const RowMorador = styled.div`
p{
  width: 100%;
}
  div{
    display: flex;
    gap: 8px;
    justify-content: end;
  }
  display: flex;
  justify-content: space-between;
  padding: 10px;
  button {
    &::before {
      display: none;
    }
  }
`;
