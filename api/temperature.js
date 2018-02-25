const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const docClient = new AWS.DynamoDB.DocumentClient();


module.exports.get = function(event, context, callback) {

  let params = {
      TableName : "temperature",
      ProjectionExpression:"#tm, temperature",
      KeyConditionExpression: "#pt = :pt AND #tm > :one_day_ago",
      ExpressionAttributeNames:{
          "#pt": "partition",
          "#tm": "time"
      },
      ExpressionAttributeValues: {
          ":pt": 1,
          ":one_day_ago": Math.floor(Date.now() / 1000)-86400,
      }
  };

  docClient.query(params, function(err, data) {
      if (err) {
          const response = {
            statusCode: 503,
            body: JSON.stringify(err)
          }
          callback(null,response);
      } else {
          console.log("Query succeeded.");
          const response = {
            statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin" : "*",
            },
            body: JSON.stringify(data),
          };
          callback(null, response);
      }
  });

};
