import styled, { css } from "styled-components";

export const Container = styled.div`
  /* flex: 1 0 21%; */

  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  /* border-right: 1px solid #dfdfdf; */
  /* border-bottom: 1px solid #dfdfdf; */
  margin-left: 7px;
  margin-top: 7px;
  /* border: 1px solid var(--lightgray); */
  border-radius: 5px;

  > img {
    width: 140px;
    height: 140px;
    transition: 0.2s;
  }

  :hover > img{
    transform: scale(1.1);
  }

  @media (min-width: 500px) {
    > img {
      width: 180px;
      height: 180px;
    }
  }
`;

export const ProductName = styled.span`
  margin: 7px 0px;
  color: var(--text);
`;
export const Price = styled.span`
  color: var(--text);
  margin-bottom: 7px;
`;

export const Quantity = styled.span`
  background-color: var(--white);
  color: var(--text);
  padding: 5px 10px;
  border-radius: 10px;
`;

export const Caption = styled.div`
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  /* background-color: #f3f2f2; */
  background-color: var(--lightgray);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SelectButtons = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-between;
`;
const baseButton = css`
  padding: 4px 9px;
  cursor: pointer;
  transition: 0.2s;
  margin-right: 3px;
  border-radius: 2px;
  width: 29px;
  height: 29px;
  font-weight: 500;
  color: #fff;
`;

export const AddButton = styled.button`
  ${baseButton}
  :hover, :active {
    background-color: transparent;
    color: var(--primary);
  }
  background-color: var(--primary);
  border: 1px solid var(--primary);
`;
export const SubButton = styled.button`
  ${baseButton}
  :hover, :active {
    background-color: transparent;
    color: red;
  }
  background-color: red;
  border: 1px solid red;
`;
