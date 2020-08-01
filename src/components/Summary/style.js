import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);

  width: 350px;
  padding: 10px;
  height: 300px;
  display: flex;
  flex-direction: column;

  hr {
    width: 100%;
    height: 1px;
    margin: 12px auto;
    background-color: var(--lighttext);
  }
  > span {
    display: flex;
    padding: 5px 10px;
    justify-content: space-between;
  }
  
  > span > span {
    color: var(--text);
    text-align: left;
  }
`;

export const CheckoutButton = styled.div`
  width: 100%;
  text-align: center;
  margin-top: auto;
  margin-bottom: 20px;
  > button {
    border-radius: 5px;
    margin: auto;
    padding: 15px;
    cursor: pointer;

    :hover {
      background-color: var(--lighttext);
    }
  }
`;
