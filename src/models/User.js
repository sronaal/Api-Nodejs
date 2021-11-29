const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    Usuario:{
        type:String,
    },
    Contraseña:{
        type:String,
    }
    
})
module.exports = mongoose.model('Usuario',userSchema)