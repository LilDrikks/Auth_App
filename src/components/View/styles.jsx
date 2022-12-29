import styled from "styled-components";
import background from "../../../public/background.jpg"
export const View = styled.div`
  width: 100%;
  margin: 20px 20px 0px 0px;
  border-radius: 5px;
  height: 100%;
  background-color: white;
  color: black;
  @media (max-width: 500px) {
    margin: 0;
  }
`;
export const Subtitle = styled.h2`
  margin: 10px;
  font-size: 34px;
`;

export const CardApto = styled.div`
  border-radius: 5px;
  color: white;
  padding: 10px;
  min-width: 300px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.1);
  p {
    padding: 4px;
  }
`;

export const containerAptos = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  justify-content: center;
  background-image: url(${background});
`;

export const Filter = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px;
  input:focus{
    color: white;
  }
`;
