First of all create SAM project with the help of **command sam init.**
Then create three lambda funtions to use resource of Dynamodb operation like getItem, AddItem and deleteItem.
After that define DynamoDb table schema in templete.yml file and set all things like method , handler , codeUri etc.
After writing all backend logic in handler build the SAM project with the help of **command sam build**
And finally deploye the code with **command sam deploy --guided**

**EndPoint for this Project - **

**For GetItem - https://w7orme32j2.execute-api.us-east-1.amazonaws.com/Prod/getData
method -    get**

**For AddItem - https://w7orme32j2.execute-api.us-east-1.amazonaws.com/Prod/addData
method      - post
Input Format -
                {
                 "id":"923",
                 "name":"Devesh kumar",
                 "dept":"Medical"
                }**
                
 **For Delete - https://w7orme32j2.execute-api.us-east-1.amazonaws.com/Prod/delete/{id}
 method     - delete**

