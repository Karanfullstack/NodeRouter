// const express = require('express');
// const path = require('path')
// const app = express();
// const bodyparser = require('body-parser')

// app.use(bodyparser.urlencoded({extended:false}));

// app.get('/',(req, res)=>{
//     res.sendFile(path.join(__dirname + '/index.html'))
// })

// app.post('/api/v1/login', (req, res)=>{
    
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//      res.send(req.body)
//     console.log(req.body);
// })

// app.listen(4000, ()=>{
//     console.log('Server is running...');
// })


const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./userRoutes');

// middlewares...
const app = express();
app.use(express.json())

app.use(bodyParser.urlencoded({extended:false}))


// ports and host
const PORT = 4000;
const HOST = 'http://localhost:';


// routes

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.use(router)



app.listen(PORT, ()=> console.log(`Server is running at ${HOST}${PORT}`))



 





