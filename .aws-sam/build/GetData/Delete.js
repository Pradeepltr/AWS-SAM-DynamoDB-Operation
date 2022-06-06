const AWS=require('aws-sdk');
 const DB=new AWS.DynamoDB.DocumentClient();
 let response;
 
exports.Deletedata=async(event,context)=>{
    const id=event.pathParameters.id
    const params={
      TableName:"data",
      Key:{
        id:id
      }
    }
    await DB.delete(params).promise()
    .then((data)=>{
      response={
        "headers":{
          "Content-Type":"application/json"
        },
        'statusCode':200,
        'body':JSON.stringify(`Item deleted with id : ${id}`)
      }
    })
    .catch((err)=>{
      response={
        "headers":{
          "Content-Type":"application/json"
        },
        'statusCode':404,
        'body':JSON.stringify(`Item not found with id : ${id}`)
      }
    })
    return response;
  };
  
 