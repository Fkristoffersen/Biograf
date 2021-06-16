const sql = require('mssql');
sql.connect()


const config = {
    user :'foo',
    password :'foo',
    server:'127.0.0.1',
    database:'',
    options:{
        trustedConnection: true,
        enableArithPort : true,
        instancename : ''

    },
    port : 55892
}

module.exports = config;