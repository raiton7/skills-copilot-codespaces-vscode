// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a router
const commentsRouter = express.Router();
commentsRouter.get('/', (req, res) => {
  res.send('GET /comments');
});

app.use('/comments', commentsRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
// GET /comments