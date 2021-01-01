const database = require("../services/database.js");

const baseQuery = `select * from employee`;

async function find(context) {
  let query = baseQuery;
  const binds = [];

  if (context.id) {
    binds.push(context.id);
    query += ` where EMPLOYEE_ID= :id`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

async function login(username, password) {
  let query = baseQuery;
  const binds = [];

  if (username && password) {
    binds.push(username, password);
    query += ` where EMPLOYEE_ID= :username AND password=:password`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports = { find, login };
