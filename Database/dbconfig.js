module.exports = {
    user            :process.env.NODE_ORACLEDB_USER || "docexpress",

    password        :process.env.NODE_ORACLEDB_PASSWORD || "docexpress",

    connestString   :process.env.NODE_ORACLEDB_CONNECTSTRING || "ORCL",    

    externalAuth    :process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
}; 