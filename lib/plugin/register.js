const newRecipientFetcher = require('../recipientFetcher');
const memorizePromise = require('promise-memoize');

const defaultConfig = {
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
  bucket: "",
  file: "",
  cacheMaxAge: 60,
  plusAddressingEnabled: true,
  plusAddressingCharacter: '+'
};

module.exports = function() {
  const config = this.config.get('s3-recipient-validator.json');

  this.parsedConfig = Object.assign({}, defaultConfig, config);
  this.getRecipients = newRecipientFetcher(
    config.accessKeyId,
    config.secretAccessKey,
    config.region,
    config.bucket,
    config.file
  );

  this.getCachedRecipients = memorizePromise(this.getRecipients, { maxAge: config.cacheMaxAge });
  
  this.logdebug("Initialized S3 Recipient Validator Plugin");
};