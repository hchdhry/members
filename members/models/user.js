const mongoose = require("mongoose");

const schema = mongoose.schema

const userschema = new schema({
    first_name:{type:"string",required:true,min:3},
    last_name_name:{type:"string",required:true,min:3},
    username:{type:"email",required:true},
    password:{type:"string",required:true,min:3},
})

userschema.virtual("fullname").get(function(){
    let fullname = "";
    if (this.first_name && this.last_name) {
      fullname = `${this.last_name_name}, ${this.first_name}`;
    }
  
    return fullname;
  
})