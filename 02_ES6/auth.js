const express = require('express');
const router  = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
// to secure user password
const bcryptjs = require('bcryptjs');
//using jwt to provide better security 
var jwt = require('jsonwebtoken');

const JWT_SECRET = "Amarisgood$programmar";

//Routecreating a user using POST "api/auth/createuser"
router.post('/createuser',[
// authentication of user data
    body('name','Enter a  valid name').isLength({ min: 5 }),
    body('Email','Enter a valid email').isEmail(),
    body('Password','Password length should be minimum 5 Character').isLength({ min: 5 })

],async (req,res)=>{
  // return bad request if there are error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
// check whether exist already or not

        try {
          
        let user = await User.findOne({Email:req.body.Email});
        if(user){
          return res.status(400).json({error:"Sorry user with this email already exists"})
        }
      // creating salt for password
      const salt =await bcryptjs.genSalt(10);
      //generating hashpassword using bcrypt js
      const secPassword = await bcryptjs.hash(req.body.Password,salt);
      // Create user if everything is ok
        user = await User.create({
        name: req.body.name,
        Password: secPassword,//now we store hash password
        Email: req.body.Email,
      })
      
      // crating token
      const data = {
        user:{
          id:user.id
        }
      }
      const authToken = jwt.sign(data,JWT_SECRET);
    res.json({authToken});
  } catch (error) {
          console.error(error.message);
          res.status(500).send("Some error occured : internal serever");
  }


})
    // authentication of user "api/auth/login".no login required
    router.post('/login',[
      // authentication of user data
          body('Email','Enter a valid email').isEmail(),    
          body('Password','Password can not be blanked').exists(),    
      ],async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
    }
    const {Email,Password} = req.body;
    try{
      let user =await User.findOne({Email});
      if(!user){
        return res.status(400).json({error:"Invalid Credentials"});
      }

      const passwordCompare =await bcryptjs.compare(Password,user.Password);
      if(!passwordCompare){       
        return res.status(400).json({error:"Invalid Credentials"});
      }
      const data = {
        user:{
          id:user.id
        }
      }
      const authToken = jwt.sign(data,JWT_SECRET);
      res.send({authToken});
    }catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured : internal serever");
}
      })
module.exports = router

/*
  jwt is a method to verify user.it facilitate a secure connection between b/w server and client.
*/