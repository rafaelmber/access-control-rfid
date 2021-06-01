import styled from 'styled-components';

export const StyledAccessList = styled.div`
  height: 97%;
  overflow-y: scroll;
  padding: 10px;

  .header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    & span {
      padding: 5px 5px;
      border: 1px solid black;
    }
  }
`;
