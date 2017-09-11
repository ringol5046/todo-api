// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect MongoDB server');
  }
  console.log('connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59b6c4dc5c114f4519b20bb6')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('unable to fetch todos', err)
  // });

  // db.collection('Todos').find().count().then((counts) => {
  //   console.log(`Todos counts: ${counts}`);
  //   }, (err) => {
  //     console.log('unable to fetch todos', err)
  // });

  db.collection('User').find({name: 'mike'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('unable to fetch todos', err)
  });

  //db.close()
});