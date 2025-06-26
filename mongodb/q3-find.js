db.employees.find()

db.employees.find({},{})        //first curly bracket is for filter //2nd bracket for projection

db.employees.find({salary:{$gt:3000}},{name:1})     //display id and name

db.employees.find().skip(1)    //skiping first data

db.employees.find().limit(1)    //only give 1st data

db.employees.find().skip(1).limit(1)    //only give 2nd data

db.employees.find({department:"IT"})    //only display the data of that emplyee whose department is "IT"

db.employees.find({department:"IT"},{_id:0,name:1})     //giving only name of that department employee

db.employees.find({department:"IT"},{_id:0,name:1,salary:1})   //giving only name and salary of that department employee

db.employees.find(                  //same above
    {department:{$eq:"IT"}},        //equal to
    {_id:0,name:1,salary:1}
)

db.employees.find({department:{$ne:"IT"}})           //not equal

db.employees.find(
    {salary:{$gt:3000}},            //greater than
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {salary:{$lte:3000}},          //less than or equal to
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {salary:{$lte:3000},department:"IT"},   //is also behave like and operator
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {$or: [{salary:{$lte:3000}},{department:"IT"}]},    //or condition
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {$and: [{salary:{$lte:3000}},{department:"IT"}]},    //And condition
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {$or:[{},{}]}           //syntax of or operator
)

db.employees.find(
    {$and:[{},{}]}           //syntax of and operator
)

db.employees.find().sort({name:1})                      //sorting in accending order
db.employees.find().sort({name:-1})                      //sorting in decending order

db.employees.find({}, {_id:0,Empname:"$name"})           //only give name field of all entries and name will display as Empname
