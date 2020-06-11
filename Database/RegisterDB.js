var oracledb = require("oracledb");
var dbconfig = require("./dbconfig");

var username = "E1";
var password = 548548;
function connRelease(connection) {
  connection.close(function (err) {
    if (err) {
      console.error(err.message);
    }
  });
}
oracledb.getConnection(
  {
    user: dbconfig.user,
    password: dbconfig.password,
    connectString: dbconfig.connestString,
  },
  function connExecute(err, connection) {
    if (err) {
      console.error(err.message);
      return;
    }
    sql = `SELECT employee_id,password FROM employee WHERE employee_id='${username}' and password=${password}`;
    connection.execute(
      sql,
      {},
      { outFormat: oracledb.ARRAY }, // or oracledb.ARRAY
      function (err, result) {
        if (err) {
          console.error(err.message);
          connRelease(connection);
          return;
        }
        console.log(result.metaData);
        console.log(result.rows);
        connRelease(connection);
      }
    );
  }
);
