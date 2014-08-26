# Loggly for Meteor

A client implementation for Loggly cloud Logging-as-a-Service API.

Module wraps [loggly](https://www.npmjs.org/package/loggly) npm module made by [Charlie Robbins](https://github.com/indexzero) and adds a few useful helpers, like log.error/log.trace/log.info/log.warn.

Loggly.{warn, error, info, trace} will produce error message with appropriate tag (warn, error, info or trace).

## Installation

`meteor add miktam:loggly`

## Usage

```js

      Logger = new Loggly({
        token: "your-really-long-input-token",
        subdomain: "your-subdomain",
        auth: {
          username: "your-username",
          password: "your-password"
        },
        //
        // Optional: Tag to send with EVERY log message
        //
        tags: ['global-tag'],
        // Optional: logs will be stored in JSON format
        json: true
      });

      Logger.log("first log from meteor");
      Logger.info("it will store this message with info tag");
      Logger.info("all", "arguments", "will be stored");
      Logger.info("my fancy object", {fancy: true});

      Logger.log("log and wait of the response in a callback", function(err, result) {
        console.log(err); // normally - null
        console.log(result); // normally - { response: 'ok' }
      })

```

## Licence

The MIT License (MIT)

Copyright (c) 2014, Andrei Karpushonak aka @miktam, http://avrora.io