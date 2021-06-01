import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  margin: 0;
  padding: 10px;
  background-color: var(--dark-blue);
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;

  & a {
    text-decoration: none;
    color: var(--white);
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid white;
    border-radius: 10px;
  }
  & a:hover {
    cursor: pointer;
    color: var(--dark-blue);
    background-color: var(--white);
  }
`;
