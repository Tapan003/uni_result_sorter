const express = require('express');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/students', studentRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
