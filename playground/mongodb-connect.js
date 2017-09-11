// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect MongoDB server');
  }
  console.log('connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   complete: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('User').insertOne({
  //   name: 'lee',
  //   age: 30,
  //   loaction: 'new york'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('unable to insert new user', err);
  //   }

  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close()
});