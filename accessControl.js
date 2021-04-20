const { Parser } = require('./cardReader');
const { Worker } = require('./database');
const { Access } = require('./database');

module.exports = async (data) => {
  const worker = await Worker.findOne({ where: { card_id: data } });
  if (worker) {
    Access.create({
      worker_id: worker.worker_id,
    });
    return JSON.stringify(worker);
  } else {
    return null;
  }
};
