import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 60px);
`;

export const GrayBox = styled.div`
  /* height: 100%; */
  background-color: var(--lightgray);
  margin: 30px 60px;
  padding: 15px;
  border-radius: 10px;
`;

export const Title = styled.span`
  color: var(--text);
  padding: 10px;
`;

export const CartTable = styled.table`
  margin: 5px;
  th {
    background-color: var(--white);
    padding: 10px 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  flex-wrap: wrap;
  /* margin-left: 40px; */
  /* margin-right: 40px; */
`;
