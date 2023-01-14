import styled from "styled-components";

export const Item = styled.li`
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

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  :hover {
    background-color: #d6d6d6d8;
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
    @media (max-width: 500px) {
      bottom: 110%;
      left: 50%;
    }
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
    @media (max-width: 500px) {
      top: 100%;
      left: 50%;
    }
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;
