const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userschema = new Schema({
    first_name: { type: String, required: true, min: 3 },
    last_name: { type: String, required: true, min: 3 },
    email: { type: String, required: true },
    password: { type: String, required: true, min: 3 }
});

userschema.virtual("fullname").get(function() {
    let fullname = "";
    if (this.first_name && this.last_name) {
        fullname = `${this.last_name}, ${this.first_name}`;
    }
    return fullname;
});

module.exports = mongoose.model("Users", userschema);
