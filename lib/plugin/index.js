const register = require('./register');
const hook_rcpt = require('./hook_rcpt');
const shutdown = require('./shutdown');
const isRecipientValid = require('./isRecipientValid');

module.exports = {
  register,
  hook_rcpt,
  isRecipientValid,
  shutdown,
};