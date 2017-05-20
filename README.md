# Loggly for Meteor

A Meteor logger for Loggly on the server/client side.

Client side support implemented by [Michael Ghobrial](https://github.com/Art1Sec8)

Module wraps [loggly](https://www.npmjs.org/package/loggly) npm module and adds a few useful helpers, like log.error/log.trace/log.info/log.warn.

Loggly.{warn, error, info, trace} will produce error message with appropriate tag (warn, error, info or trace).

## Installation

`meteor add miktam:loggly`

## Configuration

Once you have added the package, you will need to extend the Meteor.settings object with the following (e.g. in settings.json in your project root directory):

```json
{
  "public": {},
  "private": {},
  "loggly": {
    "token": "your-really-long-input-token",
    "subdomain": "your-subdomain",
    "auth": {
      "username": "your-username",
      "password": "your-password"
    },
    "tags": ["global-tag"],
    "json": "true"
  }
}
```

## Usage (client/server side)

```js
Logger.log("first log from meteor", ["custom_tag"]);
Logger.info("it will store this message with info tag");
Logger.trace({data: myJSONData});
Logger.error({message: "my fancy object", fancy: true});
```

## Licence

The MIT License (MIT)

Copyright (c) 2016, Andrei Karpushonak aka @miktam
