const Org = require('./orgModel');
const employee = require('./empModel');

exports.createOrganisation = async(req, res) => {
    try{
        const data = await Org.create(req.body);
        res.status(201).json({
            status: 'success',
            data:{
                data: data
            }
        });
    }catch(error){
        res.status(400).json({
            status: 'fail',
         message:'is not created'
    });
}
};

exports.getAllOrganisations = async(req, res) => {
    try{
        const data = await Org.find();
        res.status(201).json({
            status: 'success',
            results:data.length,
            data:{
                data: data
            }
        });
    }catch(error){
        res.status(400).json({
            status: 'fail',
         message:'is not fetched'
    });
   
  } 
};
exports.getOrganisation = async(req, res) => {
    try{
        const data = await Org.findById(req.params.id);
        res.status(201).json({
            status: 'success',
            data:{
                data: data
            }
        });
    }catch(error){
        res.status(400).json({
            status: 'fail',
         message:'is not fetched'
    });
   
  } 
};

exports.updateOrganisation = async(req, res) => {
    try{
        const data = await Org.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        });
        res.status(201).json({
            status: 'success',
            data:{
                data: data
            }
        });
    }catch(error){
        res.status(400).json({
            status: 'fail',
         message:'is not updated'
    });
   
  } 
};
exports.deleteOrganisation = async(req, res) => {
    try{
            const findOrganisation = await Org.findById(req.params.id);
         const deletingArray = await employee.deleteMany({
              _id:{
                  $in:findOrganisation.empID    
              }
          });
        const data = await Org.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status: 'success',
            data:null
                    
        });
    }catch(error){
        res.status(400).json({
            status: 'fail',
         message:'is not deleted'
    });
   
  } 
};