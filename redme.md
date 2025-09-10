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
 