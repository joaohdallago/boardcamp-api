import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/teste', (req, res) => {
  res.send('foi');
});

app.listen(4000);
