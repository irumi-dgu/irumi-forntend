import { styled } from "styled-components";

export const IrumiWriteWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url("background_write.png");
  background-size: 100% auto;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  color: ${props => props.theme.colors.font};
`;

export const backStyledImage = styled.img`
  border: none;
  display: flex;
  cursor: pointer;
  margin-top: 10%;
  align-self: flex-start;
  margin-left: 10%;
`;
