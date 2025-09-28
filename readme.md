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


<h2>Status Code</h2>
<br /><br />
<h4> Success</h4>
200 OK - The request was successful and the response contains the requested data.<br /> 
res.status(200).json({ message: "Success", data });
<br /><br />
201 Created - A new resource has been successfully created (e.g., after POST).<br /> 
res.status(201).json({ message: "User created", user });
<br /><br />
204 No Content - The request was successful but there's no content to return.<br /> 
res.status(204).send();

<br /><br /><br /> 

<h4> Redirection </h4> 
301 Moved Permanently -  A resource has been permanently moved to a new URL.<br /> 
res.redirect(301, "https://newdomain.com");
<br /><br />
302 Found - Temporary redirect.<br /> 
res.redirect(302, "/login");

<br /><br /><br /> 

 
<h4> Client Errors</h4>
400 Bad Request - The client sent invalid data (e.g., missing fields, malformed JSON).<br /> 
res.status(400).json({ error: "Invalid input" });
<br /><br />
401 Unauthorized - Authentication is required but missing or invalid.<br /> 
res.status(401).json({ error: "Authentication required" });
<br /><br />
403 Forbidden - Authenticated user lacks permission.<br /> 
res.status(403).json({ error: "Access denied" });
<br /><br />
404 Not Found - Requested resource doesn't exist.<br /> 
res.status(404).json({ error: "Resource not found" });
<br /><br />
409 Conflict - Conflict in request (e.g., duplicate entry).<br /> 
res.status(409).json({ error: "User already exists" });
<br /><br />
422 Unprocessable Entity - Validation errors in input data.<br /> 
res.status(422).json({ error: "Validation failed", details });

<br /><br /><br /> 

<h4> Server Errors</h4>
500 Internal Server Error - Unexpected server error.<br /> 
res.status(500).json({ error: "Something went wrong" });
<br /><br />
502 Bad Gateway / 503 Service Unavailable - Issues with upstream services or server overload.<br /> 
res.status(503).json({ error: "Service temporarily unavailable" });
