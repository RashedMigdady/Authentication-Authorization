const connection = require("../../../DB/DB");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  const query = `INSERT INTO users (firstName , lastName , email , password , role) VALUES (?,?,?,?,?)`;
  date = [firstName, lastName, email, hashPassword, role];
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
