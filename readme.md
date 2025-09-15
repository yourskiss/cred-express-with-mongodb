<h3>
This project is built using Express.js(render.com) and MongoDB (MongoDB Atlas).  <br />
It follows the MVC (Model-View-Controller) pattern and supports basic CRUD operations to manage student records efficiently.
</h3>
 

<h2>Features</h2>
✅ Create Student =>	Add a new student to the database <br />
📝 Edit Student =>	Update existing student details <br />
❌ Delete Student =>	Remove a student record <br />
👁️ View All Students =>	Display a list of all students <br />
📄 View Student by ID =>	View detailed info of a student by ID  <br />
🔍 Search Student by Name =>	Filter students using a name query <br />
📄 Pagination => Limit recode in each page  <br />

 

<h2>Tech Stack</h2>
Express.js => Node.js web framework for backend logic <br />
MongoDB Atlas => Cloud-hosted NoSQL database <br />
Random.com  => Hosting the live application  <br />
GitHub => Version control and collaboration <br />

 
<h2>Setting Environment</h2>
Go to  => Edit the system environment variables<br />
Go to  => Environment Variables<br />
Choose  => Path on System Variables<br />
Add  => Add MongoDB URL  (C:\Program Files\MongoDB\Server\8.0\bin)<br />
<br /> 
Go to  => Edit the system environment variables<br />
Go to  => Environment Variables<br />
Choose  => Path on User Variables<br />
Add  => Add mongosh URL  (C:\Program Files\mongosh)<br />

<br />

Install ==> mongosh <br />
Go to  ==> CMD<br />
Hit ==> mongosh<br />

 
<h2>Database Commands</h2>
show dbs  ===>>   Show all databases <br />
use dbname  ===>>   Switch to database <br />
db.dropDatabase()  ===>>   Delete current database <br />
 

<h2>Collection Commands</h2>
db.createCollection("collection name")   ===>>   Create New Collection <br />
show collections  ===>>   Show all collections <br />
db.collection.drop("collection name")  ===>>   Delete a collection <br />
db.collectionname.renameCollection("new collection name")   ===>>   rename collection <br />
 
<h2>CRUD Operations</h2>
<h4>Insert</h4>
db.collection.insertOne({ name: "Alice", age: 25 }); // Insert one <br />
db.collection.insertMany([{ name: "Bob" }, { name: "Carol" }]); // Insert many <br />
 
<h4>Read</h4>
db.collection.find();  // All documents <br />
db.collection.findOne({ name: "Alice" });  // First match <br />
db.collection.find({ age: { $gt: 20 } });  // Conditional <br />
 
<h4>Update</h4>
db.collection.updateOne({ name: "Alice" },{ $set: { age: 26 } }); // Update one <br />
db.collection.updateMany({ age: { $lt: 30 } },{ $inc: { age: 1 } }); // Update many <br />
 
<h4>Delete</h4>
db.collection.deleteOne({ name: "Alice" }); // Delete one <br />
db.collection.deleteMany({ age: { $lt: 25 } }); // Delete many <br />
 
<h4>Indexing</h4>
db.collection.createIndex({ name: 1 });  // Ascending index <br />
db.collection.dropIndex("name_1"); <br />
db.collection.getIndexes(); <br />

