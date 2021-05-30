const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Company = require('../models/Company');



const userController = {

    signup: async (req, res, next) => {
                const existingUser = await User.findOne({
                    where: {
                        email: req.body.email
                    }
                });
   
                if (existingUser != null) {
                    return res.status(409).json({
                        message: "This email has already been exist!",
                    });
                } else {
                    bcrypt.hash(req.body.password, 10, async (err, hash) => {
                        if (err) {
                            return res.status(500).json({
                                message: "Internal Server Error!",
                                error: err
                            });
                        } else {
                            const company = await Company.findOne({
                                where: {
                                  name: req.body.company.toUpperCase()
                                }
                            });
                            
                            let companyId;
                            if(company === null){
                                const newCompany = await Company.create({ name: req.body.company });
                                companyId = newCompany.id;
                                
                            }else{
                                companyId = company.id;
                            }
                            console.log(companyId)
                            const user = User.build({ 
                                name: req.body.name,
                                email: req.body.email,
                                password: hash,
                                isSupplier: req.body.isSupplier,
                                company_id: companyId
                            });
    
                            user
                                .save()
                                .then(() => {
                                    return res.status(201).json({
                                        message: "User registration has been completed successfully!",
                                        createdUser: user
                                    });
                                })
                                .catch((err) => {
                                    return res.status(400).json({
                                        message: "Bad Request!",
                                        error: err
                                    });
                                });
                        }
    
                    });
                }
            
    },

    login: async (req,res,next) =>{
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
   
            if (user == null) {
                return res.status(401).json({
                    message: "Auth Failed!",
                });
            } 
            
            bcrypt.compare(req.body.password, user.password, (err, result)=>{
                if(err){
                    console.log("error ase")
                    return res.status(401).json({
                        message: "Auth Failed!",
                    });
                }

                
                if(result){
                    const userinfo = {email:  user.email, userId: user.id};
                    const accessToken = jwt.sign(userinfo, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
                    const refreshToken = jwt.sign(userinfo, process.env.REFRESH_TOKEN_SECRET); // Check https://jwt.io/

                    return res.status(200).json({
                        message: "Welcome to the API! You are successfully logged in.",
                        access_token: accessToken,
                        refresh_token: refreshToken
                    });
                    
                     
                }
                return res.status(400).json({
                    message: "Bad Request!",
                    error: "Password doesn't match!"
                });

    
            });
      
            
       
        
    },
    token: (req, res) => {
        
        const refreshToken = req.body.refresh_token;
        
        if (refreshToken == null) return res.sendStatus(401);
        
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err){
                    return res.status(403).json({
                        message: "Forbidden!",
                        error: err
                    });
                } 
                const userinfo = {email:  user.email, userId: user.id};
                const accessToken = jwt.sign(userinfo, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3h' });
                return res.status(200).json({
                    message: "New Access Token!",
                    access_token: accessToken
                });
              })
       
            return res.status(403).json({
                message: "This refresh token does not match with any of our user information!",
                error: err
            });
        
        
      }
}

module.exports = userController;