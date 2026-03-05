const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Test route to create a user
app.post('/users', async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: { email: req.body.email },
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Backend running on port 3000'));