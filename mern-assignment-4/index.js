const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3002


// ===== Post() Request with URL Query =======

app.post('/posturl', (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send(firstName +" "+ lastName)
    
  })


// ======== Post() request with header =======

app.post('/header', (req, res) => {
    let firstName = req.header("firstName");
    let lastName = req.header("lastName");


    res.send(firstName +" "+ lastName)
  })


//============= post api with body==============

app.post('/json', (req, res) => {
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.send(jsonString)
  })

// ========= file download api =========

app.get('/download', (req,res)=>{
    res.download('./uploads/demo.jpg')
})




//====== listen port =======
app.listen(port, () => {
    console.log("server run successfully");
  })







