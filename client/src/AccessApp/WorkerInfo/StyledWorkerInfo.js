import styled from 'styled-components';
export const StyledWorkerInfo = styled.div`
  box-sizing: border-box;
  display: grid;
  /*height: 600;*/
  grid-template-columns: 200px 300px;
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    'picture name'
    'picture worker_id'
    'picture position'
    'card_id input'
    'nada output'
    'message message';
  grid-gap: 20px 30px;
  justify-content: center;
  align-items: center;
  font-family: 'Lato', 'sans serif';
  font-size: 1rem;
  color: var(--dark-blue);
  padding: 10px;

  /*border: 3px solid black;*/

  .info {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    color: var(--white);
  }
  .text_data {
    color: var(--dark-blue);
    border: 3px solid var(--white);
    padding: 8px 3px;
    margin-left: 5px;
    text-align: left;
    background-color: #788ce6;
    width: 100%;
    box-sizing: border-box;
  }
  .picture {
    grid-area: picture;
    height: 200px;
    border: 3px solid var(--white);
  }
  .name {
    grid-area: name;
  }
  .worker_id {
    grid-area: worker_id;
  }
  .input {
    grid-area: input;
  }
  .output {
    grid-area: output;
  }
  .card_id {
    grid-area: card_id;
  }
  .message {
    justify-self: center;
    align-self: center;
    grid-area: message;
    font-size: 2rem;
  }
`;
