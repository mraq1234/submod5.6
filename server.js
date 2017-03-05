var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('login-page');
});

app.get('/login-page', function(req, res) {
    res.render('login-page');
});

app.post('/auth/google', function(req, res) {
    res.render('authenticated', { user: req.body.login });
});

app.listen(3000);
app.use(function(req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});