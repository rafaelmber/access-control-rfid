import styled from 'styled-components';

export const StyledMainDisplay = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 100vh;
  grid-template-areas: 'navbar container';
  height: 100%;
  overflow: hidden;
  .navbar {
    grid-area: navbar;
  }
  .container {
    grid-area: container;
    background-color: var(--light-blue);
    overflow-y: scroll;
  }
`;
