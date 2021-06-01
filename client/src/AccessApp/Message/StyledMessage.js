import styled from 'styled-components';

export const StyledMessage = styled.div`
  font-size: 5rem;
  font-weight: bold;
  color: ${({ state }) => (state ? 'red' : 'white')};
  text-align: center;
`;
