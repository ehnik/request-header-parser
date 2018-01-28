const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get("/", (req,res)=>{
  const {headers} = req
  let os = headers['user-agent'].match(/\([^()]+\)/) //returns the operating system within user-agent string
  let lang = headers['accept-language'] //returns accepted languages
  let ipAddress
  ipAddress = req.ip //returns IP address
  let results = {ipAddress,os,lang}
  res.send(JSON.stringify(results))
})

app.listen(3000)
