# Haraka S3 Recipient Validator

Validate your recipients through a static file hosted on AWS S3.

## Installation

```
$ npm install haraka-plugin-s3-recipient-validator
```

`config/s3-recipient-validator.json`
```json
{
    "accessKeyId": "changeme",
    "secretAccessKey": "changeme",
    "region": "eu-central-1",
    "bucket": "s3-bucket",
    "file": "mail/validRecipients.txt",
    "cacheMaxAge": 60,
    "plusAddressingEnabled": true,
    "plusAddressingCharacter": "+"
}
```

`config/plugins`
```ini
...
# RCPT TO
# At least one rcpt_to plugin is REQUIRED for inbound email. The simplest
# plugin is in_host_list, see 'haraka -h rcpt_to.in_host_list' to configure.
s3-recipient-validator
...
```

`validRecipients.txt`
```ini
test@example.com
postmaster@example.com
# this is a comment
admin@example.com
```