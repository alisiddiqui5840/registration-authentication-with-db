const express = require("express")
const mongoose = require('mongoose')
const cors = require ("cors")
const userModel = require('./models/user')

const app = express ()
app.use ( express.json())
app.use (cors())

mongoose .connect("mongodb://127.0.0.1:27017/user");
//total ammount store
app.post('/saveTotalAmount', async (req, res) => {
    const { email, totalAmount } = req.body;
  
    try {
      // Find the user by their email
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update the total amount for the user
      user.totalAmount = totalAmount;
      await user.save();
  
      // Respond to the client
      res.json({ message: 'Total amount saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });




//login check data in database


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.status(200).json({
            message: 'success',
            userId: user._id,
            username: user.name
          });
        } else {
          res.status(400).json("The password is incorrect");
        }
      } else {
        res.status(404).json("User not found");
      }
    });
});

//get user name
app.post('/getUserData', (req, res) => {
  const { email } = req.body;

  userModel.findOne({ email: email })
    .then(user => {
      if (user) {
        res.json({
          userId: user._id,
          username: user.username
        });
      } else {
        res.json("User not found");
      }
    });
});
//register push data in database
app.post('/register', (req,res)=>{
    userModel.create(req.body)
    .then(user => res.json(user) )
    .catch(err => res.json(err))
})
app.listen(3001, () => {
    console.log("server is running")
})

//new code
//get total users
app.get('/getTotalUsers', async (req, res) => {
  try {
    const totalUsers = await userModel.countDocuments();
    res.json({ totalUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//get total amount
app.get('/getTotalPurchaseAmount', async (req, res) => {
  try {
    const usersWithTotalAmount = await userModel.find({ totalAmount: { $exists: true } });
    const totalPurchaseAmount = usersWithTotalAmount.reduce((total, user) => total + user.totalAmount, 0);
    res.json({ totalPurchaseAmount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//
app.get('/getUserData', async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});