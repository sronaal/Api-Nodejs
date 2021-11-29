const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({

    Nombre:{
        type:String
    },
    Precio:{
        type:Number
    },
    Cantidad:{
        type:Number
    }
})

module.exports = mongoose.model('Producto',productoSchema)