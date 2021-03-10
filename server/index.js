const express = require('express');
const app = express(); 
const path = require('path');
const port = 3001
const mc = require('./controllers/messages_controller')


app.use(express.static(path.join(__dirname,"../public/build")))
app.use(express.json())

app.get("/api/messages", mc.read);
app.delete("/api/messages/:id", mc.delete);
app.put("/api/messages/:id", mc.update);
app.post("/api/messages", mc.create);


app.listen(port, ()=> console.log(`Server listening on port ${port}.`)); 