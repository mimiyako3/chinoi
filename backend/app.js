const express = require('express');
const cors = require('cors'); 
const app = express();
const chinoiRoutes = require('./routes/chinoiRoutes');
const adviceRoutes = require('./routes/adviceRoutes');
require('dotenv').config();

app.use(cors()); 
app.use(express.json());
app.use('/chinoi', chinoiRoutes);
app.use('/advice', adviceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});