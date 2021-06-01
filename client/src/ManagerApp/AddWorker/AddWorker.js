import React from 'react';
import { StyledAddWorker } from './StyledAddWorker';

function AddWorker({
  worker,
  handleChange,
  handleSubmit,
  readCard,
  handelCardId,
}) {
  return (
    <StyledAddWorker readCard={readCard}>
      <div>Añadir a un nuevo trabajador</div>
      <form className='form' onSubmit={handleSubmit}>
        <label>Nombre completo</label>
        <input
          type='text'
          onChange={handleChange}
          name='name'
          value={worker.name}
          required
        />
        <label>Documento de identificación</label>
        <input
          type='text'
          onChange={handleChange}
          name='worker_id'
          value={worker.worker_id}
          required
        />
        <label>Área de trabajo</label>
        <input
          type='text'
          onChange={handleChange}
          name='area'
          value={worker.area}
          required
        />
        <label>Cargo</label>
        <input
          type='text'
          onChange={handleChange}
          name='position'
          value={worker.position}
          required
        />
        <label>Hora de entrada</label>
        <input
          type='time'
          onChange={handleChange}
          name='starts'
          value={worker.starts}
          required
        />
        <label>Hora de salida</label>
        <input
          type='time'
          onChange={handleChange}
          name='ends'
          value={worker.ends}
          required
        />
        <label>Tarjeta</label>
        <input
          className='button-read'
          type='button'
          onClick={handelCardId}
          value={
            worker.card_id || (readCard && 'Leyendo ...') || 'Leer tarjeta'
          }
          required
        />
        <input type='submit' value='Agregar' />
      </form>
    </StyledAddWorker>
  );
}

export default AddWorker;
