const express = require('express');
const studentRoutes = require('./routes/studentRoutes');

const app = express();


app.use(express.json());


app.use('/students', studentRoutes);



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
