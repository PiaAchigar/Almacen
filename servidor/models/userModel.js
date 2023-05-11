const { model, Schema } = require("mongoose")

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    active: Boolean
},{
    timestamps: true // created_at, updated_at
})

module.exports = model("User", userSchema)




// {
//     "name":"Ruben",
//     "email":"ruben@gmail.com",
//     "password":"mateo",
//     "role":"admin" 
// }