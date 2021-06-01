import styled from 'styled-components';

export const StyledAccessDisplay = styled.div`
  background-color: var(--light-blue);
  margin: auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 100px 470px 30px;
  grid-template-columns: 1fr;
  grid-template-areas: 'companie-area' 'content-area' 'clock-area';
  position: relative;
  justify-content: center;
  align-items: center;
  .companie {
    grid-area: companie-area;
    font-family: 'Open sans', 'sans serif';
    font-weight: bold;
    color: var(--white);
    font-size: 2.8rem;
    text-align: center;

    /*border: 1px solid red;*/
  }
  .content {
    grid-area: content-area;
  }
  .clock {
    padding: 0 10px;
    grid-area: clock-area;
  }
  @media screen and (min-width: 600px) {
  }
`;
