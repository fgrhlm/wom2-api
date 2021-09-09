const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Testa att detta funkar, ersätt sedan med egen kod
app.get('/test', (req, res) => res.json("Hello!"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
