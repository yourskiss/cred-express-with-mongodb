This project is built using Express.js and MongoDB (hosted on MongoDB Atlas).
It manages user records and supports basic CRUD operations.

Features
✅ Create a new user (manually or using randomuser API)
📝 Edit an existing user
❌ Delete a user
👁️ View all users
🔍 Search user by name
📄 View user detail by ID


Tech Stack
Express.js => Backend framework (Node.js)
MongoDB Atlas => Cloud-hosted NoSQL database
Mongoose => ODM for MongoDB in Node.js
Random.com  => Host the application
GitHub => Version control and collaboration


================ setting environment  ================
Go to  => Edit the system environment variables
Go to  => Environment Variables
Choose  => Path on System Variables
Add  => Add MongoDB URL  (C:\Program Files\MongoDB\Server\8.0\bin)

Go to  => Edit the system environment variables
Go to  => Environment Variables
Choose  => Path on User Variables
Add  => Add mongosh URL  (C:\Program Files\mongosh)



Install ==> mongosh 
Go to  ==> CMD
Hit ==> mongosh



================ MongoDB Commands ================
show dbs  ===>>   Show all databases
use <db name>  ===>>   Switch to database
db.dropDatabase()  ===>>   Delete current database

db.createCollection("collection name")   ===>>   Create New Collection
show collections  ===>>   Show all collections
db.collection.drop("collection name")  ===>>   Delete a collection
db.collectionname.renameCollection("new collection name")   ===>>   rename collection
 