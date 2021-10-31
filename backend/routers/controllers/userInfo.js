const connection = require("../../DB/DB");

const getUserInfo = (req , res)=>{
    const id = req.token.userId;
    const query = `SELECT * FROM users WHERE id=${id}`;

    connection.query(query , (err , userInfo)=>{
        if (err) return res.status(404).json({success:false , message:"There is error" , Error:err});

        res.status(200).json({success:true , message :"get information of user is Done!" , userInfo,})
    })
    
}

module.exports = {getUserInfo};