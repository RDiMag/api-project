const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}

app.use(cors());
app.use(express.static('public', options));

const rappers = {
  'waco': {
    'age': 29,
    'birthName': 'The Branch Davidians',
    'birthLocation': 'London, England',
},
  'los angeles': {
    'age': 29,
    'birthName': 'Scientology',
    'birthLocation': 'Chicago, Illinois'
  },
  'unknown': {
    'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
  }
} 

app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
  const rapperName = request.params.name.toLowerCase()
   if(rappers[rapperName]){
    response.json (rappers[rapperName])
   } else {
    response.json(rappers['unknown'])
   }
})


app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is running on port ${PORT}! Better go catch it!`)
})