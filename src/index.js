const express = require('express')
const morgan = require('morgan')
const path = require('path');
const hbs  = require('express-handlebars');
const app = express()
const port = 3000

app.use(morgan('combined'))
app.engine('hbs', hbs.engine({
extname:'.hbs'
}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources/views'));
//console.log('PATH: ',path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  return  res.render('home');
})

app.get('/news', (req, res) => {
  return  res.render('news');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})