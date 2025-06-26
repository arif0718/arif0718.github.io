db.employees.find(
    {$or:[{ salary: { $gt: 3000 } }, { department: "IT" }]}, 
    {name: 1}
);

//count Document:No.of the document present
db.employees.countDocuments()

//aggregation:this is use for pipeline fxn  its like show fxn
db.employees.aggregate([
    {$match:{salary:{$gt:3000}}},     //1st used match pipeline
    {$project:{name:1,salary:1}},     //2nd pipeline used for project
    {$sort: {name:1}},
    {$limit: 1},
])

db.employees.aggregate([
    {$project: {_id:0, name:1, location:1}},
    {$unwind: "$location"}
])