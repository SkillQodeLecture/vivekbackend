const express = require('express')

const port = 8080

const app = express()

app.get('/' , (req , res) => {
    return res.send('index page')
})

app.get('/home' , (req , res) => {
    return res.send('home page')
})

app.listen(port , (error) => {
    if(error){
        console.log('server not start');
        return false;
    }
    console.log(`server has been start on port ${port}`);
})
