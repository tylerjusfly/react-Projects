const {Pool} = require("pg")
require('dotenv').config();

const db = new Pool({
    user: 'jusfly',
    host: 'localhost',
    password: 'tylerjusfly1996',
    database: 'tickets',
    port: 5432,
  });

  const createConnection = async(req, res, next) => {
    try {
      const SqlSelect = "SELECT * FROM conversationTable"
      const response = await db.query(SqlSelect)
  
      res.json({status : "connected", result : response.rows})
    } catch (error) {
      return next(error)
    }
}

 module.exports = { db, createConnection }
