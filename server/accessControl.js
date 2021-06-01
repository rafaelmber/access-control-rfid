const { Worker } = require('./database');
const { Access } = require('./database');
const entryValidation = require('./entryValidation.js');
const { Port } = require('./cardReader');

module.exports = async (data) => {
  const worker = await Worker.findOne({ where: { card_id: data } });
  if (worker) {
    message = entryValidation(worker);
    Access.create({
      worker_id: worker.worker_id,
      message: message,
    });
    Port.write(Buffer.from('a'));
    return JSON.stringify(worker);
  } else {
    return null;
  }
};
