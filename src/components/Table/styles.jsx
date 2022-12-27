import styled from "styled-components";

export const Table = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0px 20px;
  background-color: white;
  display: flex;
`;

export const SideBar = styled.div`
  margin: 20px;
  padding: 10px;
  width: 90px;
  gap: 10px;
  height: 100%;
  background-color: white;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const Logo = styled.span`
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  width: 60px;
  height: 60px;
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
    left: 28px;
    top: 10px;
    background-color: white;
  }
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: 14px;
    top: 12px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
