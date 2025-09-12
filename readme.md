This project is built using Express.js and MongoDB (hosted on MongoDB Atlas). 
It follows the MVC (Model-View-Controller) pattern and supports basic CRUD operations to manage student records efficiently.
<br /><br />

<h2>Features</h2>
✅ Create Student =>	Add a new student to the database <br />
📝 Edit Student =>	Update existing student details <br />
❌ Delete Student =>	Remove a student record <br />
👁️ View All Students =>	Display a list of all students <br />
📄 View Student by ID =>	View detailed info of a student by ID  <br />
🔍 Search Student by Name =>	Filter students using a name query <br />

<br /><br />

<h2>Tech Stack</h2>
Express.js => Node.js web framework for backend logic <br />
MongoDB Atlas => Cloud-hosted NoSQL database <br />
Random.com  => Hosting the live application  <br />
GitHub => Version control and collaboration <br />

<br /><br />
<hr /><hr />
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
 