const Pool = require('pg').Pool
const pool = new Pool({
    user: "wofs",
    password: "0887792",
    host: "192.168.56.3",
    port: 5432,
    database: "jobs"
})


module.exports = pool