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

const cults = {
  'waco': {
    'cultName': 'The Branch Davidians',
    'status': 'Inactive',
    'leader': 'David Koresh, aka Vernon Howell'
},
  'los angeles': {
    'culthName': 'Scientology',
    'status': 'Active',
    'leader': 'L. Ron Hubbard'
  },
  'unknown': {
    'cultName': 'unknown',
    'status': 'n/a',
    'leader': 'n/a',
  }
} 

app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:city', (request, response)=>{
  const city = request.params.city.toLowerCase()
   if(cults[city]){
    response.json (cults[cultName])
   } else {
    response.json(cults['unknown'])
   }
})


app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is running on port ${PORT}! Better go catch it!`)
})