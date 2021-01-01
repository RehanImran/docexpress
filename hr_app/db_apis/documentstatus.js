const database = require("../services/database.js");

const baseQuery = `select * from documentstatus`;

async function find(context) {
  let query = baseQuery;
  const binds = [];

  if (Object.keys(context).length) {
    binds.push(context.employee_id);
    binds.push(context.document_id);
    query += ` where EMPLOYEE_ID=:eid AND DOCUMENT_ID=:did`;
  }
  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
