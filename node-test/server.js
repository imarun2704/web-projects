const express = require('express')
const mongoose = require('mongoose');
const User = require('./crudModel');
const crudRouter = require('./crudRoute')

const app = express()
const port = 3000
app.use(express.json());


const DB = "mongodb+srv://user:Aa!9789751574@cluster0-jg1hc.mongodb.net/crud?retryWrites=true&w=majority"

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
    })
    .then(() => console.log('DB connection successful!'));
 


// app.use('/', crudRouter)

app.post('/',async (req, res) => {
      console.log(req.body);
    try {

        const newUser = await User.create(req.body);
        console.log(newUser);
        res.status(200).json({
            status: 'success',

            data: {
                user : newUser
            }
        });
    } catch (err) {
        console.log(err);
    }
});

app.get('/get',async (req, res) => {

  try {

      const newUser = await User.find(req.body);
      console.log(newUser);
      res.status(200).json({
          status: 'success',

          data: {
              user : newUser
          }
      });
  } catch (err) {
      console.log(err);
  }
});

app.get('/getone/:id',async (req, res) => {

    try {
  
        const newUser = await User.findById(req.params.id);
        console.log(newUser);
        res.status(200).json({
            status: 'success',
  
            data: {
                user : newUser
            }
        });
    } catch (err) {
        console.log(err);
    }
  });
  

app.patch('/patch/:id',async (req, res) => {

    try {
  
        const newUser = await User.findOneAndUpdate(req.params.id,req.body);
        console.log(newUser);
        res.status(200).json({
            status: 'success',
  
            data: {
                user : newUser
            }
        });
    } catch (err) {
        console.log(err);
    }
  });


  app.patch('/delete/:id',async (req, res) => {

    try {
  
        const newUser = await User.findByIdAndDelete(req.params.id);
        console.log(newUser);
        res.status(200).json({
            status: 'success',
  
            data: {
                user : newUser
            }
        });
    } catch (err) {
        console.log(err);
    }
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))