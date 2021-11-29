const {Router, response}  = require("express")
const Producto = require('../models/productos')
const jwt = require("jsonwebtoken")

const router = Router();

router.post('/producto',(req,res) =>{
    
    let producto = new Producto(req.body);

    producto.save()
    .then((data) => res.status(201).json({data}))
    .catch((error) => res.status(500).json("Ha Habido un error"))
})

router.get('/productos',(req,res) =>{

    Producto
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
})

module.exports = router;