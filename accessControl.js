const Worker = require('./models/worker');
const { Parser } = require('./cardReader');
const Access = require('./models/access');

module.exports = async (data) => {
  const worker = await Worker.findOne({ where: { card_id: data } });
  if (worker) {
    Access.create({
      worker_id: worker.worker_id,
    });
  }
  return JSON.stringify(worker);
};
