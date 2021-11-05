const connection = require("../../../DB/DB");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  let { firstName, lastName, email, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);
  email = email.toLowerCase();
  const query = `INSERT INTO users (firstName , lastName , email , password ) VALUES (?,?,?,?)`;
  date = [firstName, lastName, email, hashPassword];
  connection.query(query, date, (err, result) => {
    if (err)
      return res
        .status(404)
        .json({ success: false, message: "There is Error!", Error: err });

    return res
      .status(200)
      .json({ success: true, message: "success to register!", result });
  });
};

module.exports = { signUp };
