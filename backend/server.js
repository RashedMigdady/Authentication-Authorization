const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());

app.use(cors());
const connection  = require('./DB/DB');
const RegisterRouter = require('./routers/routes/signUp');




app.use('/register' , RegisterRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running On PORT= ${PORT}`);
});
