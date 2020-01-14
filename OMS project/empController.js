const employee = require('./empModel');

exports.orgId = (req, res, next) => {
    // Allow nested routes
    if (!req.body.employee) req.body.orgID = req.params.orgID;
    next();
  };
  

exports.signup = async(req, res, ) => {
    const data = await create.create(req.body);
     res.status(201).json({
         status: 'success',
         data:{
             data: data
         }
     })
};
