const express = require('express');
const vehiclesRouter = require('./vehicles');
const app = express();
app.use(express.json());
app.use('/vehicles', vehiclesRouter);
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});