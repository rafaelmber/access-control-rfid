import React, { useState, useEffect } from 'react';
import AddWorker from './AddWorker';

function AddWorkerContainer({ history }) {
  const [readCard, setReadCard] = useState(false);
  const [worker, setWorker] = useState({
    name: '',
    worker_id: '',
    area: '',
    position: '',
    starts: '',
    ends: '',
    card_id: 'Leer Tarjeta',
    picture: 'unknown.png',
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setWorker({
      ...worker,
      [name]: value,
    });
    console.log(worker);
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendForm(worker);
  }

  function handelCardId() {
    setReadCard(true);
    fetch('/api/card')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setReadCard(false);
        setWorker({
          ...worker,
          card_id: data.card_id,
        });
      });
  }

  function sendForm(data) {
    fetch('/api/worker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === 'Worker Added') {
          history.push('/app/workers');
        } else if (data.status === 'Failed') {
          alert('La identidad ya existe');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <AddWorker
      worker={worker}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handelCardId={handelCardId}
      readCard={readCard}
    />
  );
}

export default AddWorkerContainer;
