# Loggly for Meteor

A Meteor logger for Loggly on the server/client side.

Client side support implemented by [Michael Ghobrial](https://github.com/Art1Sec8)

Module wraps [loggly](https://www.npmjs.org/package/loggly) npm module and adds a few useful helpers, like log.error/log.trace/log.info/log.warn.

Loggly.{warn, error, info, trace} will produce error message with appropriate tag (warn, error, info or trace).

## Installation

`meteor add miktam:loggly`

## Usage (client/server side)

```js
      //Create the Logger object on the server side only
      //for example, you can put the following in Meteor.startup on the server

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
        tags: ["global-tag"],
        // Optional: logs will be stored in JSON format
        json: "true"
      });

      //The following can be called on either the Meteor client or server

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

Copyright (c) 2016, Andrei Karpushonak aka @miktam
