const mongoose = require('mongoose');



const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    email: {
        type: String,
        required: 'Email is required'
    },
    Address: {
        type: String,
    }

});

const User = mongoose.model('User', TaskSchema);

module.exports = User;
