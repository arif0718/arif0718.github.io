db.employees.find(
  { $or: [{ salary: { $gt: 3000 } }, { department: "IT" }] },
  { name: 1 }
);

//count Document:No.of the document present
db.employees.countDocuments();

//aggregation:this is use for pipeline fxn  its like show fxn
db.employees.aggregate([
  { $match: { salary: { $gt: 3000 } } }, //1st used match pipeline
  { $project: { name: 1, salary: 1 } }, //2nd pipeline used for project
  { $sort: { name: 1 } },
  { $limit: 1 },
]);

db.employees.aggregate([
  { $project: { _id: 0, name: 1, location: 1 } },
  { $unwind: "$location" }, //unwind operator used for separation
]);

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      bonus: { $multiply: ["$salary", 2] }, //if bonus is not present then it created by defaut
    },
  },
]);

//except name all comes
db.employees.aggregate([{ $project: { name: 0 } }]);

//creating group
db.employees.aggregate([
  {
    $group: {
      _id: "$department", //return sum of salary of department-wise
      total: { $sum: "$salary" },
    },
  },
]);

db.employees.aggregate([
  {
    $group: {
      _id: {country:"$country",name:"$name"},
      total: { $sum: "$score" },
    },
  },
]);

db.employees.aggregate([
  {
    $group: {
      _id: null, //give sum of salary of all
      total: { $sum: "$salary" },
    },
  },
]);

//order inserted
db.orders.insertOne(
  { empId: ObjectId("685bc9e60d6df958d09f9912"), orderValue: 1200 } //added orderValue
);

db.orders.insertOne({
  empId: ObjectId("685bb9720d6df958d09f990c"),
  orderValue: 5000,
});

db.orders.find(); //finding order

db.employees.aggregate([
  { $match: { salary: { $gt: 2000 } } },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "orders",
    },
  },
  { $unwind: "$orders" }, //remove array and make orders as part of entry and also //who have orders field only that entry display
  { $project: { name: 1, "orders.orderValue": 1 } },
]);

//done by me: created new collection-empCountry and put that in employee collection

db.empCountry.insertMany([
  { empId: ObjectId("685bc9e60d6df958d09f9912"), country: "Dubai" },
  { empId: ObjectId("685bb9370d6df958d09f990a"), country: "Dubai" },
  { empId: ObjectId("685bb9370d6df958d09f990b"), country: "United States" },
  { empId: ObjectId("685bb9720d6df958d09f990c"), country: "United Kingdom" },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "empCountry",
      localField: "_id",
      foreignField: "empId",
      as: "empCountry",
    },
  },
]);

//indexing
db.employees.createIndex({ email: 1 }); //make email as an index
db.employees.getIndexes(); //getting index
db.employees.dropIndex("email_1"); //deleting index

db.employees.find({ email: "john@gmail.com" }).explain("executionStats");
db.employees.find().explain("executionStats");


//by me
//created student collection
//and group it

db.student.insertMany([
  {
    name:"Krish",
    country:"India",
    score:20
  },
  {
    name:"Krish",
    country:"India",
    score:21
  },
  {
    name:"Krish",
    country:"India",
    score:22
  },
  {
    name:"John",
    country:"UK",
    score:21
  },
  {
    name:"John",
    country:"UK",
    score:25
  },
  {
    name:"John",
    country:"UK",
    score:22
  },
])

db.student.aggregate([
  {$group:{
    _id:{country:"$country", name:"$name"},
    total:{$sum:"$score"}
  }}
])


db.student.drop()   //deleting colection