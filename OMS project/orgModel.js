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
      
      empID : [
        {
        type: mongoose.Schema.ObjectId,
        ref: 'employee'
        }
      ]
      

    });

    orgSchema.pre(/^find/, function(next) {
      // this.populate({
      //   path: 'tour',
      //   select: 'name'
      // }).populate({
      //   path: 'user',
      //   select: 'name photo'
      // });
    
      this.populate({
        path: 'employee',
        select: '_id'
      });
      next();
    });
    
    
    const Org = mongoose.model('Org', orgSchema);

    module.exports = Org;
    









