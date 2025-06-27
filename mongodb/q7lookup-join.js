// done by me
//creating posts and comments collections
//merging comments to posts

db.posts.insertMany([
  {
    _id: "p1",
    post: "post 1",
  },
  {
    _id: "p2",
    post: "post 2",
  },
]);

db.comments.insertMany([
  {
    _id: "c1",
    pid: "p1",
    comment: "comment1",
  },
  {
    _id: "c2",
    pid: "p1",
    comment: "comment2",
  },
  {
    _id: "c3",
    pid: "p2",
    comment: "comment1",
  },
  {
    _id: "c4",
    pid: "p2",
    comment: "comment2",
  },
  {
    _id: "c5",
    pid: "p2",
    comment: "comment3",
  },
]);

db.posts.aggregate([
  {
    $lookup: {
      //combining comments to posts
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments",
    },
  },
  { $unwind: "$comments" }, //gives individual comments for individual post
  { $project: { post: 1, "comments.comment": 1 } }, //showing comments in posts
]);

//insert one more comment to post one
db.comments.insertOne({ _id: "c6", pid: "p1", comment: "comment 3 to post 1" });

db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments",
    },
  },
  { $unwind: "$comments" },
  { $project: { post: 1, "comments.comment": 1 } },
]);

//done by me question 2
db.marks.insertMany([
  {name: "John", term: "t1", subject: "maths", score: 98},
  {name: "John", term: "t2", subject: "maths", score: 90},
  {name: "John", term: "t3", subject: "maths", score: 88},
  {name: "John", term: "t1", subject: "Science", score: 92},
  {name: "John", term: "t2", subject: "Science", score: 82},
  {name: "John", term: "t3", subject: "Science", score: 82},
  {name: "Cathy", term: "t1", subject: "maths", score: 92},
  {name: "Cathy", term: "t3", subject: "maths", score: 82},
  {name: "Cathy", term: "t2", subject: "maths", score: 92},
  {name: "Cathy", term: "t1", subject: "Science", score: 92},
  {name: "Cathy", term: "t2", subject: "Science", score: 82},
  {name: "Cathy", term: "t3", subject: "Science", score: 80},
]);

//avgScore respect to name
db.marks.aggregate([
    {$group:{_id:"$name", AvgScore:{$avg:"$score"}}}
])

//avgScore respect to term
db.marks.aggregate([
    {$group:{_id:"$term", AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])

//avgScore respect to subject
db.marks.aggregate([
    {$group:{_id:"$subject", AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])

//avgScore respect to term->subject
db.marks.aggregate([
    {$group:{
        _id:{term:"$term", subject:"$subject"},
        AvgScore:{$avg:"$score"}
    }},
    {$sort:{_id:1}}
])

//avgScore of John in term-wise
db.marks.aggregate([
  {$match:{name:"John"}},
    {$group:{
        _id:{name:"$name", term:"$term"},   //name used for sowing name of john
        AvgScore:{$avg:"$score"}
    }},
    {$sort:{_id:1}}
])

db.marks.updateMany(
    {},
    { $rename: { name: "sid"}}
)

db.studentinfo.insertMany([
  {_id:"s1", name:"John"},
  {_id:"s2",name:"Cathy"}
])

db.marks.updateMany({sid:"John"}, {$set: {sid: "s1"}})
db.marks.updateMany({sid:"Cathy"}, {$set: {sid: "s2"}})

db.studentinfo.aggregate([
  {$lookup:{
    from:"marks",
    localField:"_id",
    foreignField:"sid",
    as:"marks"
  }},
  {$unwind:"$marks"},
  {$group: {_id:"$term"}}
])