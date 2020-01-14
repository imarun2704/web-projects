const mongoose = require('mongoose');
const validator = require('validator');


const employeeSchema = new mongoose.Schema(
  {
    name: {
                  type: String,
                  required:[true, 'please tell us your good name']
    },
    email:{
                  type: String,
                  required: [true, 'Please provide your email'],
                  unique: true,
                  lowercase: true,
                  validate: [validator.isEmail, 'Please provide a valid email']
              },
              orgID: {
                            type: mongoose.Schema.ObjectId,
                            ref: 'Org' 
                        },
               Address: {
                         type:String
                         },
                 salary: {
                 type: Number
                      },
                  age:{
                     type:Number
                        },
                 role: {
                          type: String,
                          enum: ['user','admin'],
                          default: 'user'
                        },
                        password: {
                          type: String,
                          required: [true, 'Please provide a password'],
                          minlength: 4,
                          select: false
                        },
                        passwordConfirm: {
                          type: String,
                          required: [true, 'Please confirm your password'],
                          validate: {
                            // This only works on CREATE and SAVE!!!
                            validator: function(el) {
                              return el === this.password;
                            },
                            message: 'Passwords are not the same!'
                          },
                        }
  });



  const employee = mongoose.model('employee', employeeSchema);

  module.exports = employee;
