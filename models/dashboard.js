const mongoose = require('mongoose');


const dashboardSchema = new Schema({
    firstName:{
        type : String,
        required : true,
    },
    lastName:{
        type : String,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    time:{
        type : Date,
        required : true,
    },
},);

const User = mongoose.model('Dashboard', dashboardSchema);