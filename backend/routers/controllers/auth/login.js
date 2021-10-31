const connection = require("../../../DB/DB");
const bcrypt = require("bcrypt");

const login = (req , res)=>{
    const {email , password } = req.body;

    const query = `SELECT * FROM users WHERE email ='${email}'`;

    connection.query(query ,async (err , result)=>{
        if (!result)
        {res.status(500).json({result :"Email is Not found!"})}
        

        const valid =await bcrypt.compare(password ,result[0].password)

        if (!valid)
        {
            res.status(200).json({message:"The password incorrect!"})
        }else
        {
            res.status(200).json({message:"you are logged!"})
        }
    })
}


module.exports = {login}