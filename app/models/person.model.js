const {poolPromise} = require('../../config/database')

exports.create = async (date) => {
    const pool = await poolPromise;

    const rs = await pool
        .request()
        .query(`INSERT INTO person (name)
                VALUES ('${date.name}')`)

    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const promise = await new Promise((resolve, reject) => {
        pool.query(`SELECT *FROM person`, (err, result) => {
            resolve(result)
        })
    })
    return promise
}

exports.update = async (id, date) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`UPDATE person
                SET name = '${date[0].name}'
                WHERE id = ${id}`);

    return rs.rowsAffected;
}

exports.delete = async (id) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`DELETE
                FROM person
                WHERE id = ${id}`)

    return rs.rowsAffected;
}

exports.readById = async (id) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT *
                FROM person
                WHERE id = ${id} `);

    return rs.recordset;
}
exports.readByPage = async ( params) => {
    const pool = await poolPromise;

    console.log(params.page);
    const promise = await new Promise((resolve, reject) => {
        pool.query(`SELECT *
                    FROM users
                             limit  ${params.page}`, (err, result) => {
            resolve(result)

        })
    });
    for (var i = 0; i < promise.length; i++) {

        // promise[i].name =12

    }
    return promise



}
