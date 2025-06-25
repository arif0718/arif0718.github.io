db.employees.updateMany(
    {},
    { $rename: { points: "score"}}      //rename the field
)

db.employees.updateMany(
    {},
    { $unset: { point: ""}}    //deleting particular field
)

db.employees.updateMany(
    {},
    {$push:{points:3}}        //pushing value to the array:points
)
db.employees.updateMany(
    {department:"IT"},        //pushing the value to the array:"points" of only id department
    {$push:{points:7}}
)

db.employees.updateMany(
    {},
    {$pull: {points:{$gt:3}}}     //if condition gt:3 passes then it pull last element of an array
)

db.employees.updateMany(
    {},
    {$addToSet: {location:'LA'}}       //both push and addToSet are add the value in array but addToSet not add duplicate value in it but push always add value even its already exist
)