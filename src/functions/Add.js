const AWS=require('aws-sdk');
 const DB=new AWS.DynamoDB.DocumentClient();
 let response;
 exports.Adddata=async(event,context)=>{
 
    const Items=JSON.parse(event.body);
   const params={
     TableName:"data",
     Item:{
       id:Items.id,
       Name:Items.name,
       Department:Items.dept
     }
   }
   await DB.put(params).promise()
   .then((data)=>{
    response = {
      "headers": {
      "Content-Type": "application/json"
      },
      'statusCode': 400,
      'body': JSON.stringify("Data Submitted")
      };
   
   })
   .catch((err)=>{
    response = {
      "headers": {
      "Content-Type": "application/json"
      },
      'statusCode': 400,
      'body': JSON.stringify(err)
      };
   
   })
  return response;

 };