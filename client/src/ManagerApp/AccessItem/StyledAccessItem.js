import styled from 'styled-components';

export const StyledAccessItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 20px;
  padding: 5px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-secundario);
  & span {
    padding: 5px 5px;
    border-right: 1px solid black;
  }
`;
