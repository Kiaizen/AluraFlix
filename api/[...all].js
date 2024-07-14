const server = require('../server');
const { send } = require('micro');

module.exports = async (req, res) => {
  await server(req, res);
};
