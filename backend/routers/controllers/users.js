const connection = require("../../DB/DB");

const getAllUsers = (req , res)=>{
    const query = `SELECT * FROM users`;

    connection.query(query , (err , users)=>{
        if (err) return res.status(404).json({Error:err})

        res.status(200).json({users,});
    })
}

module.exports = getAllUsers;