const {Router} = require("express");
const User = require('../models/User')
const router = Router();
const jwt = require("jsonwebtoken");


router.post('/register',async (req,res) =>{
    
    
    const  user = User(req.body);
    await user.save()
    const token =  jwt.sign({_id: user._id},'secretKey')
    res.status(200).json({token})
})

router.post('/login', async (req,res) =>{
    
    const {Usuario,Contraseña} = req.body;
    const usuario = await User.findOne({Usuario: req.body.Usuario});
    if(!usuario) return res.status(401).send("El Usuario No existe");
    if(usuario.Contraseña !== Contraseña ) return res.status(401).send("Contraseña invalida")

    const token = jwt.sign({_id: usuario._id}, 'secretKey');
    return res.status(200).json({token})
})

router.get('/users',verifyToken, (req,res) =>{

    User
    .find()
    .then((data) => res.json(data))
    .catch((error) => console.log(error))

})

router.get('/profile',verifyToken,(req,res) =>{
    res.send(req.userId)
})


module.exports = router;


function verifyToken(req,res, next){

    try {
        if(!req.headers.authorization){
            return res.status(401).send("No tienes acceso")
         }
         
         const token = req.headers.authorization.split(' ')[1]
         if(token === undefined){
             return res.status(401).send("No tienes acceso")
         }
     
         const payload = jwt.verify(token,'secretKey')
     
         req.userId = payload._id;
         next();        
    
        } 
    catch (error) {
        return res.status(400).json({error: 'Token No valido'})

    }

}