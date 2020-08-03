import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/cart-icon.svg";

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  &:hover > svg {
    fill: var(--lightwhite);
  }
`;

export const CartIcon = styled(Icon)`
  padding-top: 4px;
  width: 40px;
  
  height: 40px;
  fill: var(--white);
  transition: 0.2s;

`;

export const Counter = styled.div`

  color: var(--lightwhite);
  font-weight: 500;
  position: absolute;
  right: 1px;
  bottom: 1px;
  font-size: 13px;
  border-radius: 5px;
  padding: 0px 3px;
  background-color: var(--red);
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
`;
