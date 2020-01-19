
const mongoose = require('mongoose');

const app = require('./app');


const db = mongoose
  .connect('mongodb://localhost:27017/oms', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  
  })
  .then(() => console.log('DB connection successful!'));

const port =  3000;
 app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});




// mongoose
//   .connect('mongodb://localhost:27017/java' , {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log('DB connection successful!'));




//   const port =  3000;
//   const server = app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
//   });
  