import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './generated/app';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

var port = process.env.PORT || 3000;
// View templates
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Static assets
app.use(express.static(path.resolve(__dirname, '../dist')));

// Routes
app.get('/', (request, response) => {
  response.render('app', {
    app: ReactDOMServer.renderToString(<App />)
  });
});


app.listen(port, () => {
  console.log('Server running on Port :' + port);
  
});