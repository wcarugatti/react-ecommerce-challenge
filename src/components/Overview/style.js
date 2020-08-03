import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 60px);
  h3,h2,h1, th {
    color: var(--text);
  }

  h3 > a{
    text-decoration: underline;
  }
  
`;

export const GrayBox = styled.div`
  /* height: 100%; */
  min-height: 300px;
  background-color: var(--white);
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
    /* background-color: var(--white); */
    padding: 10px 20px;
  }
  th,td{
    border: 1px solid var(--lighttext);
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
