const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const employee = require('./empModel');
const Org = require('./orgModel');
const catchAsync = require('./catchAsync');
const AppError = require('./appError');

const signToken = id => {
    return jwt.sign({id}  ,'my-ultra-key-and-more-secure-key', {
        expiresIn:'90d'
    });
};

exports.createEmployee = catchAsync(async(req, res, next) => {
    

    const data = await employee.create(req.body);
    Org
    .findOne({ _id: data.orgID })
    .populate('empID') // only works if we pushed refs to person.eventsAttended
    .exec(function(err, person) {
        if (err) return handleError(err);
        console.log(Org);
    });
   
    const token = signToken(data._id); 
       
       res.status(201).json({
           status: 'success',
           token,
           data: {
               data:data
           }
       
       });
});

exports.login = catchAsync(async (req, res, next) => {

   const { email, password } = req.body;
   
   if(!email || !password){
       return next(new AppError('provide email and password', 404));
   }

   const user = await employee.findOne({ email }).select('+password');

   if (!user || !(await user.correctPassword(password, user.password))) {
       return next(new AppError('Incorrect email or password', 401));
     }
    const token = signToken(user._id);
    res.status(201).json({
       status: 'success',
       token
      
   });
  
});

exports.protect = catchAsync(async (req, res, next) => {
     let token;
  
    if(req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer'))
      {
          console.log('req header',req.headers.authorization);
          token = req.headers.authorization.split(' ')[1];
      
      }
      
      console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',token);
      if(!token) {
          return next(new AppError('you are not logged in!! pls log in', 401));
      }

      const decoded = await promisify(jwt.verify)(token, 'my-ultra-key-and-more-secure-key');
       console.log(decoded,' fresher user cgheck');
      const freshUser = await employee.findById(decoded.id);
      console.log(freshUser, 'hhhhhhhhhhhhhhhhhhhhhh');
      if(!freshUser) {
          return next(new AppError('The user belonging to this token does no longer exist.', 401));
      }

      if(!freshUser.changedPasswordAfter(decoded.iat)) {
          return next(new AppError(' user recently changed password! please log in again', 401));
      }

       req.user = freshUser;
      next();
});

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
if(!roles.includes(req.user.role)) {
    return next(new AppError('u dont have permission',400));
}
   next();
   
    };
};