const express = require('express');
const env = require('dotenv');
const app = express();
const cors = require('cors');
const { todo } = require('./db');
const { createTodo, updateTodo } = require('./types');
env.config();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000

// Post request for submitting todo to the db

app.post('/todo', async function(req, res) {
    try {
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload);
        if(!parsedPayload.success) {
            res.status(411).json({
                msg: "Invalid Inputs"
            });
            return;
        }

        //Put in mongodb

        const newTodo = await todo.create({
            title: createPayload.title,
            desc: createPayload.desc,
            completed: false
        });
        res.json({
            msg: "Todo Created successfully",
            todo: newTodo
        });
    } catch(err) {
        console.log("Error creating todo: ", err);
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
});


// Get request for retriving all todos from db

app.get('/todo', async function(req, res) {
    const todos = await todo.find({});
    res.json(todos);
});

// put request for updating status of todo completed/not yet completed

app.put('/put', async function(req, res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
      res.status(411).json({
        msg: "You sent the Wrong Input",
      })
      return;
    }
  
    await todo.updateOne({
      _id: req.body.id
    }, {
      completed: true
    })
    
    res.json({
      msg: "Todo Mark as Completed"
    })
});

app.listen(PORT, () => {
    console.log(`Your server are listening on http://localhost:${PORT}`);
});