var sql = require("mssql");
var connect = function () {
  var conn = new sql.ConnectionPool({
    user: "sa",
    password: "123",
    server: "DESKTOP-URGVC26\\EXPRESS",
    database: "demo",
  });

  return conn;
};

module.exports = connect;
