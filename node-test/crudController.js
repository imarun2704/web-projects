const User = require('./crudModel');


exports.create = async (req, res) => {

    console.log(req.body);
    try {

        const newUser = await User.create(req.body);
        console.log(newUser);
        res.status(201).json({
            status: 'success',

            data: {
                data: newUser
            }
        });
    } catch (err) {
        console.log(err);
    }
};

