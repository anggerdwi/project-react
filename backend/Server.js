const express = require('express');
const { Pool } = require('pg');  // Mengimpor Pool dari pg untuk koneksi ke PostgreSQL

const app = express();

// Konfigurasi koneksi database PostgreSQL
const pool = new Pool({
  user: 'postgres',       
  host: 'localhost',       
  database: 'myproject',   
  password: '@Pras321', 
  port: 5432,               
});

// route untuk mengambil data dari database
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products'); // Query ke table products
    res.json(result.rows);  // Kirim data dalam format JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// run server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server jalan di http://localhost:${PORT}`);
});