import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  background: #000;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  tranistion: 0.4s background ease-in;
  border: 1px solid transparent;

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
