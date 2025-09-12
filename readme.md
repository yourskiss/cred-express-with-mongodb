<h3>
This project is built using Express.js(render.com) and MongoDB (MongoDB Atlas).  <br />
It follows the MVC (Model-View-Controller) pattern and supports basic CRUD operations to manage student records efficiently.
</h3>

<br />

<h2>Features</h2>
✅ Create Student =>	Add a new student to the database <br />
📝 Edit Student =>	Update existing student details <br />
❌ Delete Student =>	Remove a student record <br />
👁️ View All Students =>	Display a list of all students <br />
📄 View Student by ID =>	View detailed info of a student by ID  <br />
🔍 Search Student by Name =>	Filter students using a name query <br />
📄 Pagination =>	View 4 recode in each page  <br />

<br />

<h2>Tech Stack</h2>
Express.js => Node.js web framework for backend logic <br />
MongoDB Atlas => Cloud-hosted NoSQL database <br />
Random.com  => Hosting the live application  <br />
GitHub => Version control and collaboration <br />

<br />
 
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

<br />

<h2>MongoDB Commands</h2>
show dbs  ===>>   Show all databases <br />
use <dbname>  ===>>   Switch to database <br />
db.dropDatabase()  ===>>   Delete current database <br />
db.createCollection("collection name")   ===>>   Create New Collection <br />
show collections  ===>>   Show all collections <br />
db.collection.drop("collection name")  ===>>   Delete a collection <br />
db.collectionname.renameCollection("new collection name")   ===>>   rename collection <br />
 