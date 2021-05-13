const router=require('express').Router()
const User = require('../Models/user.model')
let Exercise=require('../Models/exercise.model')

router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercises=>res.json(exercises))
    .catch(err=>res.status(400).json('Erros: '+err))
})

router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const description=req.body.description;
    const duration=req.body.duration;
    const date=Date.parse(req.body.date);

    const newExercise=new User({
        username,
        description,
        duration,
        date,

    
    });

    newExercise.save()
    .then(()=>res.json('User added!'))
    .catch(err=>res.status(400).json('Error' + err))
})





module.exports=router;