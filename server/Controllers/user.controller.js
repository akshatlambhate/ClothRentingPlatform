import User from "../Models/user.model.js";

export const SignUpUser =async (req,res)=>{
    console.log(req.body)
    const result = await User.create(req.body);
     return res.status(201).json({msg:"User Created Successfully"})

} 
export const LoginUser =async (req,res)=>{
    const{email, password} = req.body;
    const user = await User.findOne({email , password});
    if(!user) return res.status(402).json("Invalid Credientials");
    return res.status(201).json("user found")
} 

