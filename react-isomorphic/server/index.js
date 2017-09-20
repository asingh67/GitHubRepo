import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world from Express');
});

app.listen(3000, () => console.log('Server running at port 3000'));