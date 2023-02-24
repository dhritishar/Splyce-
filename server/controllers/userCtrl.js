const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//login callback, confirm user
const loginController = async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(200)
          .send({ message: "user not found", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(200)
          .send({ message: "Invlid Email or Password", success: false });
      }
      const token = jwt.sign({ id: user.__id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).send({ message: "Login Success", success: true, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: `Error in Login ${error.message}` });
    }
  };

//register callback 
const registerController = async (req, res) => {
    //check if user exists
    try {
        const existingUser = await userModel.findOne({email:req.body.email});
        if(existingUser) {
            return res.status(200).send({message: "User already exists", success:false});
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        req.body.password = hashedPassword;
    //create a new user
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send({message:"Registeration successful", success:true});
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message: `Register Controller ${error.message}`,});
    }
};

module.exports = { loginController, registerController };
