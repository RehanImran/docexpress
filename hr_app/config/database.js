module.exports = {
    hrPool: {
      user: process.env.NODE_ORACLEDB_USER || "docexpress",
      password: process.env.NODE_ORACLEDB_PASSWORD || "docexpress",
      connectString: process.env.NODE_ORACLEDB_CONNECTSTRING || "ORCL",
      externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false,
      poolMin: 10,
      poolMax: 10,
      poolIncrement: 0
    }
  };