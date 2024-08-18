const mysql = require("mysql2/promise");

const db = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const query = async (sql, values = undefined) => {
  const conn = await mysql.createConnection(db);

  const [rows, fields] = values ? await conn.query(sql, values) : await conn.query(sql);
  return rows;
};

module.exports = query;
