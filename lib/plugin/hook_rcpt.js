module.exports = function(next, connection, params) {
  const [rcpt] = params;
  const rcptAddress = rcpt.address();

  this.logdebug(`Validating recipient: ${rcptAddress}`);

  this.isRecipientValid(rcpt)
    .then((valid) => {
      if (valid) {
        this.logdebug(`Valid recipient. Continuing...`);
        next();
      } else {
        this.logdebug(`Invalid recipient. Denying...`);
        next(DENY, "Invalid email address.");
      }
    })
    .catch((err) => {
      this.logdebug(`Validating recipient ${rcptAddress} failed`);
      next(DENY, "Invalid email address.");
    });
}