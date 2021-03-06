const connection = require("../../../DB/DB");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("dotenv").config();
const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  
  const query = `SELECT * FROM users WHERE email ='${email}'`;

  connection.query(query, async (err, result) => {
    if (!result) {
      res.status(500).json({ result: "Email is Not found!" });
    }

    try {
      const valid = await bcrypt.compare(password, result[0].password);

      if (!valid) {
        res.status(200).json({ message: "The password incorrect!" });
      } else {
          const payload ={
              userId : result[0].id,
              email : result[0].email,
              role: result[0].role,
          }
          
          const options = {
            expiresIn:"100h"
          }
          const token = await jwt.sign(payload , process.env.SECRET , options)
          
        res.status(200).json({
          success: true,
          message: `Email and Password are correct`,
          token: token,
          role:result[0].role
        });
      }
    } catch (error) {
      res.status(404).json({ Error: error });
    }
  });
};

module.exports = { login };
