const Org = require('./orgModel');


exports.signup = async(req, res) => {
    const data = await Org.create(req.body);
     res.status(201).json({
         status: 'success',
         data:{
             data: data
         }
     })
};
