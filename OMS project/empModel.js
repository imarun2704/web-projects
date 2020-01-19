const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
                          required: [true, 'Please provide ur role'],
                          enum: ['user','admin'],
                          default: 'user'
                        },
                        password: {
                          type: String,
                          required: [true, 'Please provide a password'],
                          minlength: 4,
                          select:false
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
                          }
                        },
                        passwordChangedAt: Date
  });

  employeeSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;
    next();
  });

  employeeSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };


  employeeSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
    if(this.passwordChangedAt){
      console.log(this.passwordChangedAt, JWTTimestamp);
      const changedTimestamp = parseInt(this.passwordChangedAt.getTime()/1000,10);
      return JWTTimestamp < changedTimestamp;
    }
    return false;
  }

  const employee = mongoose.model('employee', employeeSchema);

  module.exports = employee;
