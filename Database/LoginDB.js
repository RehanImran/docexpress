var oracledb = require("oracledb");
var dbconfig = require("./dbconfig");

var username = "E3";
//var password = 548548;
var uname = null;
var pass = null;
var dep = null;
var depname = null;
var designationname = null;
var designation = null;
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
    sql = `SELECT employee_id,password,designation_id,department_id FROM employee WHERE employee_id='${username}'`;
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
        uname = result.rows[0][0];
        pass = result.rows[0][1];
        designation = result.rows[0][2];
        dep = result.rows[0][3];
        console.log(uname);
        console.log(pass);
        sqla = `SELECT designation_name FROM designation WHERE designation_id='${designation}'`;
        connection.execute(
          sqla,
          {},
          { outFormat: oracledb.ARRAY }, // or oracledb.ARRAY
          function (err, result) {
            if (err) {
              console.error(err.message);
              connRelease(connection);
              return;
            }

            designationname = result.rows[0][0];
            console.log(designationname);
          }
        );
        sqlb = `SELECT department_name FROM department WHERE department_id='${dep}'`;
        connection.execute(
          sqlb,
          {},
          { outFormat: oracledb.ARRAY }, // or oracledb.ARRAY
          function (err, result) {
            if (err) {
              console.error(err.message);
              connRelease(connection);
              return;
            }

            depname = result.rows[0][0];
            console.log(depname);
          }
        );
      }
    );
  }
);
//console.log(result.metaData);
