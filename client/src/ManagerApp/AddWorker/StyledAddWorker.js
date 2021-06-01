import styled from 'styled-components';

export const StyledAddWorker = styled.div`
  padding: 10px;
  font-family: 'Lato', 'sans serif';
  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    & input {
      margin-bottom: 5px;
      padding: 5px;
    }
    .button-read {
      color: ${({ readCard }) => {
        return readCard ? 'blue' : 'black';
      }};
      background-color: ${({ readCard }) => {
        return readCard ? 'black' : 'white';
      }};
    }
  }
  @media screen and (min-width: 600px) {
    .form {
      margin: 0 auto;
      width: 500px;
    }
  }
`;
