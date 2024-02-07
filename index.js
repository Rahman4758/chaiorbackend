require('dotenv').config()
const express = require('express')
const app = express()  // app express se bana hua hai
const port = 3000      // port 3000 pe listen kr rahe h
app.get('/', (req,res)=>{   // ./ pe jo request a rahi hai uska respond kr rahe h
    res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{  //multiple request handle kr skte h .get se
    res.send('rahmancom')  // js callback function
                           // res.send me twitter ka url bhej rahe
})
app.get('/login',(req,res)=>{
    res.send('<h1> please login at chai or code</h1>')
})
app.listen(process.env.PORT,()=>{ //env me port 3000 likha h wahi link ho raha
     // port 3000 pr listen kr rahe h to console print kr do 
    console.log(`Example app listening on port ${port}`)
})