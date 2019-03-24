const cleanEmailAddress = require('../cleanEmailAddress');

module.exports = function(recipient) {
  return this.getCachedRecipients()
    .then(recipients => {
      return recipients.indexOf(cleanEmailAddress(recipient.address(), this.parsedConfig)) !== -1;
    });
}
