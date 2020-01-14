const mongoose = require('mongoose');


const orgSchema = new mongoose.Schema(
    {
       
      name: {
          type: String,
          required: [true, 'Please provide name']
      },

      address: {
          type: String
      },
      
      empID : {
        type: mongoose.Schema.ObjectId,
        ref: 'employee'
      }

    });


    const Org = mongoose.model('Org', orgSchema);

    module.exports = Org;
    









