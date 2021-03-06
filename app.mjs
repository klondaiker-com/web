import express from 'express';
import locale from './locale.mjs'
import i18n from './i18n.mjs';

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(locale);
app.use(i18n);

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
