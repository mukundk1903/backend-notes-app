
const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const userSchema = new Scheme({
    fullName: {type:String},
    email: {type:String},
    password: {type:String},
    createdOn: {type:Date, default: new Date().getTime() },
});

module.exports = mongoose.model("User", userSchema);