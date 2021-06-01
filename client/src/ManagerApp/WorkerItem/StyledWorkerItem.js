import styled from 'styled-components';

export const StyledWorkerItem = styled.div`
  margin: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-secundario);
  display: flex;
  align-items: center;
  padding: 5px;
  font-family: 'Lato', 'sans serif';
  transform: scale(1);
  &:hover {
    /*cursor: pointer;*/
    transform: scale(1);
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 5px;
  }
  .Item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .Item__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    font-size: 1 rem;
    margin: 0 8px;
    text-align: left;
  }
  .Item__info-name {
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0;
  }
  .Item__schedule {
    text-align: center;
  }
`;
