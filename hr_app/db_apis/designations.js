const database = require("../services/database.js");

const baseQuery = `select * from designation`;

async function find(context) {
  let query = baseQuery;
  const binds = [];

  if (context.id) {
    binds.push(context.id);
    query += ` where DESIGNATION_ID= :id`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
