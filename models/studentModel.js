const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    eventName: {
        type: String,
        default: NULL
    },
    firstName: {
        type: String,
        default: NULL
    },
    lastName: {
        type: String,
        default: NULL
    },
    email: {
        type: String,
        unique:true,
        default: NULL
    },
    scholarId: {
        type:Number,
        unique:true,
        maxlength:7,
        minlength: 7,
        default: NULL
        
    },
    address: {
        type:String,
        default: NULL
    },
    payment: {
        public_id: {
            type: String,
            default: NULL
        },
        url: {
            type: String,
            default: NULL
        }
    },

});



module.exports = mongoose.model("Student", studentSchema);