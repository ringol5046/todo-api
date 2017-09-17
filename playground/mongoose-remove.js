const {ObjectID} =require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '59bed2e8c6142482c29fc056'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('59bed2e8c6142482c29fc056').then((todo) => {
  console.log(todo);
});

