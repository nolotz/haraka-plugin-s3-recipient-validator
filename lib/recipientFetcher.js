const AWS = require("aws-sdk");
const os = require('os');

/**
 * newRecipientFetcher
 * @param {string} accessKeyId 
 * @param {string} secretAccessKey 
 * @param {string} region 
 * @param {string} bucket 
 * @param {string} file 
 */
function newRecipientFetcher(accessKeyId, secretAccessKey, region, bucket, file) {
  const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
    region
  });

  const objectOptions = {
    Bucket: bucket,
    Key: file,
  };

  return () => 
    s3.getObject(objectOptions)
      .promise()
      .then(data => data.Body.toString())
      .then(dataBody => dataBody.split(os.EOL))
      .then(recipients => recipients.filter(line => line.charAt(0) !== '#'))
}

module.exports = newRecipientFetcher;