db.employees.insertOne({
  name: "John Doe",
  email: "john@gmail.com",
  department: "Engineering",
  salary: 75000,
  location: ["New York", "San Francisco"],
  data: Date(),
});

db.employees.insertMany([
  {
    name: "Mike Joseph",
    email: "mike@gmail.com",
    department: "IT",
    salary: 2456,
    location: ["FL", "TX"],
    data: Date(),
  },
  {
    name: "Cathy G",
    email: "cathy@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["AZ", "TX"],
    data: Date(),
  },
]);

db.employees.find();
 db.users.find({},{name:1})  //only give name file of the data
db.users.find({},{})       //give every fild
db.users.find({},{_id:0,name:1})  //only give name fild
db.users.find({},{_id:0,age:1})      //only give age fild
db.users.find({},{_id:false,name:true,age:true}) == db.users.find({},{_id:0,name:1,age:1})     //both are same give that fild
db.users.drop()   //deleting users collections