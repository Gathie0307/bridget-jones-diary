const Entry = require('../models/Entry');

// GET /entries
async function index(req, res) {
  try {
    const entries = await Entry.getAll();
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// GET /entries/recent
async function getRecent(req, res) {
  try {
    const recentEntries = await Entry.getRecent();
    res.status(200).json(recentEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// GET /entries/search?date=2025-07-24&category=health
//this needs more work in the model!
/*
async function search(req, res) {
  try {
    const data = req.query;
    const results = await Entry.search(data);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
  */

// GET /entries/:id
async function show(req, res) {
  try {
    const id = parseInt(req.params.id);
    const entry = await Entry.getOneById(id);
    res.status(200).json(entry);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

// POST /entries
async function create(req, res) {
  try {
    const data = req.body;
    const newEntry = await Entry.create(data);
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// PATCH /entries/:id
async function update(req, res) {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const entry = await Entry.getOneById(id);
    const updatedEntry = await entry.update(data);
    res.status(200).json(updatedEntry);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

// DELETE /entries/:id
async function destroy(req, res) {
  try {
    const id = parseInt(req.params.id);
    const entry = await Entry.getOneById(id);
    await entry.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

module.exports = {
  index,
  getRecent,
  //search,
  show,
  create,
  update,
  destroy,
};
