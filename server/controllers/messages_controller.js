const messages = []; 
let id = 0; 

function Message (text,time, key=id) {
  this.id = key,
  this.text = text,
  this.time = time
}

module.exports = {
  create: (req,res,next) => {
    messages.push(new Message(req.body.text, req.body.time));
    id++;
    res.status(200).send(messages); 
  },
  read: (req,res,next) => {
    res.status(200).send(messages);
  },
  update: (req,res,next) => {
    messages.forEach((message,ind,arr) => parseInt(req.params.id)===message.id?arr[ind].text=req.body.text || message.text :null); 
    res.status(200).send(messages);
  },
  delete:(req,res,next) => {
    messages.forEach((message,ind,arr) => parseInt(req.params.id)===message.id?arr.splice(ind,1):null);
    res.status(200).send(messages);
  }
}