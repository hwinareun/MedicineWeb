const mysql = require("mysql2");

const db = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const query = async (sql, values = undefined) => {
  const pool = mysql.createPool(db);
  const conn = pool.promise();


  const [rows, fields] = values ? await conn.query(sql, values) : await conn.query(sql);
  return rows;
};

module.exports = query;
