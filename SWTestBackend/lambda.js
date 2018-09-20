let AWS = require('aws-sdk');

exports.handler = function (event, context, callback) {

    console.log(event);
    callback(null, {
        "isBase64Encoded": true,
        "statusCode": 200,
        "headers": {
           "access-control-allow-origin": "*",
            "headerName": "headerValue"
        },
        "body": JSON.stringify(event)
    });
}