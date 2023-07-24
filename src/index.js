const { log } = require('console')
const express = require('express')
const expressHbs = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.engine('handlebars', expressHbs.engine({
    layoutsDir: 'views/layouts', // directory to handlebars files
    defaultLayout: null,
    extname: 'handlebars'
})
);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));    // optional


app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})