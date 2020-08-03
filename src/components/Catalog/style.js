import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - var(--sidebar-size));
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h3{
    width: 90%;
    padding: 20px;
    text-align: left;
    color: var(--text);
  }
`;
