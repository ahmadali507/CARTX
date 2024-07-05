const express = require('express')
const {check , validationResult}  = require('express-validator')
const User = require('../../models/user')
const bcrypt = require('bcrypt')


const register = express.Router(); 

const validate = [


    check('email').isEmail().withMessage("Email address is invalid"), 
    check('password').isAlphanumeric().withMessage("password invalid").isLength({min : 3 , max : 15}).withMessage("Password must have 3 to 10 letters.")

]

register.post('/register', validate, async (req,res) =>{

    const {email , password, username} = req.body;
    // first check whtether this email exists or not... 
    const checkEmail = await User.findOne({email : email}); 
    const checkUsername =  await User.findOne({username : username}); 
    
    const result = validationResult(req); 
    if(( !username || !email || !password )){
        return  res.status(404).json({
             error : "All fields are required"
     })
    }
    if(!result.isEmpty()) {

        return res.status(402).json({error: result.array()[0].msg})
        console.log(result.array())
   
    }
    
    
    if(checkEmail || checkUsername) {
         return res.status(400).json({error : "Username and email must be unique"}); 
    }

  if(result.isEmpty() &&  !checkEmail && !checkUsername){

    const saltrounds = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, saltrounds)
      const user = new User({
          username : username,
          email : email,
          password  : hashedPassword,
        })
        console.log(user);
        await user.save(); 
      return  res.status(200).json({success : true});
    }
})

module.exports = register; 
