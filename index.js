const mongoose = require('mongoose');

mongoose.connect('mongodb://gbryant:Blessedautumn1106@cluster0-shard-00-00-xutke.gcp.mongodb.net:27017,cluster0-shard-00-01-xutke.gcp.mongodb.net:27017,cluster0-shard-00-02-xutke.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser:true});

const connection = mongoose.connection;

connection.then((db) =>{
    console.log('connection....nice');

}).catch((err)=> {
    console.log('fix it', err)

});