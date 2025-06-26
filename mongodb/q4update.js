db.employees.insertMany([
  {
    name: "Amy",
    email: "amy@gmail.com",
    department: "HR",
    salary: 2000,
    location: ["NY", "TX"],
    data: Date(),
  },
  {
    name: "Rafeal",
    email: "rafeal@gmail.com",
    department: "Admin",
    salary: 1500,
    location: ["AZ", "TX"],
    data: Date(),
  },
]);

db.employees.find({department: { $in: ["Admin","HR"]}})     //whose department is admin or hr
db.employees.find({department: { $nin: ["Admin","HR"]}})    //whose department is not admin or hr

db.employees.updateOne(
    {email: 'john@gmail.com'},
    {$set: {department:"IT"}}         //set used for updating field
)

db.employees.updateMany(
    {},
    {$set:{points:1}}                //adding new field for all employees
)

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}}              //increase points by 1
)
db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:-1}}             //decrease points by 1
)

db.employees.updateOne(
    {email:"krish@gmail.com"},
    {$set: {name:"Krish", department:"HR"}},
    {upsert:true}                                 //upsert is for insert the data if the user doesn't exist
)

db.employees.deleteOne({email:"krish@gmail.com"})        //delete the entry
db.employees.deleteMany({department:"HR"})               //deleting multiple entries


