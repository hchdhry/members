const mongoose = require("mongoose");

const schema = mongoose.schema;

const messageschema = new schema({
    title:{type:"string",max:50},
    Text:{type:"string",required:true,min:3,max:200},
    date:new date()
});


module.exports=mongoose.model("message",messageschema);