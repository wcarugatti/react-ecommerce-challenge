import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 0px;
  background-color: var(--lightgreen);
  color: var(--text);
  width: var(--sidebar-size);
  height: calc(100vh - 58px);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  box-shadow: var(--shadow1);
`;

export const Title = styled.div`
  width: 100%;
  padding: 10px;
  background-color: var(--white);
  text-align: center;
`;

export const ProductsList = styled.div`
  width: 100%;
  overflow-y: auto;
`;

export const Total = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`;

export const CheckoutButton = styled.div`
  padding: 10px;
  width: 40%;
  margin: 10px auto;
  cursor: pointer;
  text-align: center;
  color: var(--text);
  border-radius: 6px;
  background-color: var(--lightgray);
  :hover {
    background-color: var(--lighttext);
  }
`;

export const FlexEnd = styled.div`
  background-color: var(--white);
  width: 100%;
  /* height: 100%; */
  margin-top: auto;
  display: flex;
  flex-direction: column;
`;

