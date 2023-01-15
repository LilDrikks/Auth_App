import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px 20px;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 90%;
  }
`;
