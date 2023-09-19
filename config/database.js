const sql = require('mysql')

//'mssql://User:Password@ComputerName/\Instance/DatabaseName'
//Following example:

const poolPromise =  sql.createPool({

    user: 'alisamiNode',
    password: '123456789',
    host: '92.204.221.14',
    port: '3306',

    database: 'xchat',
    charset: "utf8mb4"
})
poolPromise.getConnection(function (err, con) {
    if (err) {

        console.log(' Error getting mysql_pool connection: ' + err);

    }


});
module.exports = {
  sql, poolPromise
};