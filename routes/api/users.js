//  route   Post/api/user

// desc     register user

// acces    Public

const express =require('express');
const router=express.Router();

const {check,validationResult}= require("express-validator")

const User = require('../../models/User')
const gravatar= require('gravatar')
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')
const config=require('config')

router.post('/',[
    check('name','name is required').not().isEmpty(),
    check('email','Please include an valid email').isEmail(),
    check('password','Please enter a password which have 6 or more character').isLength({ min:6})
],
async(req,res)=>{

    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }

    const { name,email,password}=req.body;

    try{
        //  for checking user exixst or not
        let user = await User.findOne({ email});
        if (user){
            return res.status(400).json({errors:[{msg: "user already exist" }]})
        }
        //get users gravatar 

      const avatar = normalize(
        gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        }),
        { forceHttps: true }
      );

      user = new User({
        name,
        email,
        avatar,
        password
      });
        user = new User({
            name,
            email,
            avatar,
            password
        });
        // Encrypt password

        const salt= await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt)
        await user.save();

        // return jwt

        const payload = {
            user:{
                id:user.id
            }
        }
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn:360000},
            (err,token)=>{
                if (err) throw err;
                res.json({token})
            }
            );

    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error')

    }

    
});

module.exports=router;