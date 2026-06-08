const express = require('express');
const router = express.Router();

// GET ejemplo simple
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// GET con parametros
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ 
    id: id, 
    name: 'User ' + id,
    email: `user${id}@example.com`
  });
});

// POST ejemplo
router.post('/data', (req, res) => {
  const { name, value } = req.body;
  
  if (!name || !value) {
    return res.status(400).json({ error: 'name and value required' });
  }
  
  res.status(201).json({ 
    success: true, 
    data: { name, value } 
  });
});

// GET con query params
router.get('/search', (req, res) => {
  const { q, limit = 10 } = req.query;
  
  if (!q) {
    return res.status(400).json({ error: 'query parameter required' });
  }
  
  res.json({ 
    query: q, 
    limit: parseInt(limit),
    results: []
  });
});

module.exports = router;
