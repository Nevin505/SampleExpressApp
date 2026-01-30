const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Express Server");
});

// Sample GET API
app.get("/api/users", (req, res) => {
  res.json({
    success: true,
    users: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ],
  });
});

// Sample POST API
app.post("/api/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  res.status(201).json({
    success: true,
    message: `User ${name} created`,
  });
});

// Start server
app.listen(PORT, (err) => {
    console.log(err);
    
  console.log(`Server running on http://localhost:${PORT}`);
});
