const express = require('express')

const port = 8080

const app = express()

app.set('view engine' , 'ejs')

app.get('/' , (req , res) => {
    return res.render('index')
})

app.get('/home' , (req , res) => {
    return res.render('home')
})


app.listen(port , (error) => {
    if(error){
        console.log('server not start');
        return false;
    }
    console.log(`server has been start on port ${port}`);
})
