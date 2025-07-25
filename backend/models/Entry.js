const db = require('../database/connect')

class Entry {
    constructor({ id, entry_date, category, description }) {
      this.id = id;
      this.entry_date = entry_date;
      this.category = category;
      this.description = description;
    }




  // Get all entries
  static async getAll() {
    const response = await db.query(`SELECT * FROM entries ORDER BY entry_date DESC`);

    if (response.rows.length === 0) {
      throw new Error("No entries available.");
    }

    return response.rows.map(e => new Entry(e));
  }

  // Get most recent 5 entries
  static async getRecent() {
    const response = await db.query(`SELECT * FROM entries ORDER BY entry_date DESC LIMIT 5`);

    if (response.rows.length === 0) {
      throw new Error("No recent entries available.");
    }

    return response.rows.map(e => new Entry(e));
  }

  // Get entry by ID
  static async getOneById(id) {
    const response = await db.query(`SELECT * FROM entries WHERE id = $1`, [id]);

    if (response.rows.length === 0) {
      throw new Error(`Entry with id ${id} not found.`);
    }

    return new Entry(response.rows[0]);
  }

  // Create new entry
  static async create(data) {
    const{ entry_date, category, description } = data
    const response = await db.query(
      `INSERT INTO entries (entry_date, category, description)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [entry_date, category, description]
    );

    if (response.rows.length === 0) {
      throw new Error("Failed to create new entry.");
    }

    return new Entry(response.rows[0]);
  }

    // Delete this entry by ID
  async destroy() {
      const response = await db.query(`DELETE FROM entries WHERE id = $1 RETURNING *`, [this.id]);

      if (response.rows.length === 0) {
        throw new Error(`Failed to delete entry with id ${this.id}.`);
      }
      return;
    }


  // Update this entry by ID
  async update(data) {
    const { entry_date, category, description } = data;

    const response = await db.query(
    `UPDATE entries
     SET entry_date = $1, category = $2, description = $3
     WHERE id = $4
     RETURNING *;`,
    [entry_date, category, description, this.id]);

     if (response.rows.length === 0) {
    throw new Error(`Failed to update entry with id ${this.id}.`);
  }

  return new Entry(response.rows[0]);
  }



//no idea here
/*
  static async search() {


  }
*/

}

  module.exports = Entry;
