const AWS=require('aws-sdk');
 const DB=new AWS.DynamoDB.DocumentClient();
 let response;
 exports.getData = async (event, context) => {
    
    
    const params={
      TableName:"data"
    }
    await DB.scan(params).promise()
    .then((data)=>{
   //    response={
   //      'statusCode':200,
   //      'body':(data.Items)
   //    }
   response = {
       "headers": {
       "Content-Type": "application/json"
       },
       'statusCode': 200,
       'body': JSON.stringify(data.Items)
       };
    })
    .catch((err)=>{
   //    response={
   //      'statusCode':400,
   //      'body':JSON.stringify(err)
   //    }
   response = {
       "headers": {
       "Content-Type": "application/json"
       },
       'statusCode': 400,
       'body': JSON.stringify(err)
       };
    
    })
      return response
    };
    