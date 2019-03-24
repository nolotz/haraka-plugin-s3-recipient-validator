/**
 * 
 * @param {string} recipient
 * @returns {string} 
 */
module.exports = function cleanEmailAddress(recipient, { plusAddressingEnabled, plusAddressingCharacter }) {
  if (!plusAddressingEnabled) {
    return recipient;
  }
  const charOffset = recipient.indexOf(plusAddressingCharacter);
  
  if (charOffset === -1) {
    return recipient;
  }

  return recipient.slice(0, charOffset) + recipient.slice(recipient.indexOf('@'));
}
