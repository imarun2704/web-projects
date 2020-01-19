const jwt = require('jsonwebtoken');
const employee = require('./empModel');
const catchAsync = require('./catchAsync');
const AppError = require('./appError');




exports.getAllEmployees =catchAsync(async(req, res, next) => {
        const data = await employee.find();
        res.status(201).json({
            status: 'success',
            results:data.length,
            data:{
                data: data
            }
        });
    
});
exports.getEmployee =catchAsync(async(req, res, next) => {
  
        const data = await employee.findById(req.params.id);

        if(!data){
            return next(new AppError('no employee found with the id', 404))
        }

        res.status(200).json({
            status: 'success',
            data:{
                data: data
            }
        });
});

exports.updateEmployee = catchAsync(async(req, res, next) => {
        const data = await employee.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        });
        res.status(201).json({
            status: 'success',
            data:{
                data: data
            }
        });
   });
exports.deleteEmployee = catchAsync(async(req, res, next) => {

        const data = await employee.findByIdAndDelete(req.params.id);
        if(!data){
            return next(new AppError('no employee found with the id', 404))
        }
        res.status(201).json({
            status: 'success',
            data:null
                    
        });
    });