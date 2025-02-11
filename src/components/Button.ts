import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  width: 170px;
  height: 32px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;

  position: relative;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${theme.colors.accent};
    transition: ${theme.animations.transition};

    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.accent};
  }
`