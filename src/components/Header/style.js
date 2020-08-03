import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
  height: 58px;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--primary);

  > * {
    margin-right: 15px;
  }

  + div{
    padding-top: 58px;
  }

`;
