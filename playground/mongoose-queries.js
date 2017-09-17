const {ObjectID} =require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

var id = '59b8aa3bc2e38064622be432'
var userID = '59b756e434ce3956c5d9d3f0'

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id:id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById(userID).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User by ID', user);
}, (e) => {console.log(e)})