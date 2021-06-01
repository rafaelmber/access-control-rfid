function convertToNum(string) {
  const numArray = [];
  string.split(':').forEach((str) => {
    numArray.push(parseInt(str));
  });
  return numArray;
}

function entryValidation(worker) {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();

  const startTime = convertToNum(worker.starts);
  const endTime = convertToNum(worker.ends);

  console.log('Hora actual', `${hours}:${minutes}`);
  console.log('Entrada: ', startTime, 'Salida: ', endTime);

  if (hours < startTime[0] - 1 || hours > endTime[0]) {
    return 'Out of Time';
  } else if (hours < startTime[0]) {
    if (Math.abs(minutes - startTime[0]) > 10) {
      return 'Out of Time';
    } else {
      return 'On time';
    }
  } else if (hours - startTime[0] === 1 && minutes - startTime[1] <= 5) {
    return 'On Time';
  } else {
    return 'Late';
  }
}

module.exports = entryValidation;
