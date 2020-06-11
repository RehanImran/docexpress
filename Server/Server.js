var express = require("express");
var app = express();
var oracledb = require("oracledb");
var bodyParser = require("body-parser");

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(4545, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("start");
});

const { username = "", password = "" } = this.state;

var con = oracledb.getConnection(
  {
    user: "docexpress",
    password: "docexpress",
    connectString: "ORCL",
  },
  function connExecute(err, connection) {
    if (err) {
      console.error(err.message);
      return;
    } else {
      console.log("connected");
      app.get("/users", function (req, res) {
        sql = `SELECT employee_id,password FROM employee WHERE employee_id='${username}' and password=${password}`;
        connection.execute(
          sql,
          {},
          { outFormat: oracledb.ARRAY }, // or oracledb.ARRAY
          function (err, result) {
            if (err) {
              console.error(err.message);
              // connRelease(connection);
              return;
            }
            //console.log(result.metaData);
            console.log(result.rows);
            res.send(result.rows);
            //connRelease(connection);
          }
        );
      });
    }
  }
);

/*app.get('/users',function(req,res){
    con.connExecute(`SELECT employee_id,password FROM employee WHERE employee_id='${username}' and password=${password}`, function(error,row,field){
        if(error) console.log(error.message)
        else console.log(rows)
    })
})*/
