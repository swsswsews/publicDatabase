//load pool
const pool = require('../pool')

//register
module.exports.registerUser = (username, password, callback) => {
    const query=`INSERT INTO users (name, password) VALUES (?, ?)`

    const values=[username, password]

    pool.query(query, values, callback)
}

//login
module.exports.loginUser=(username, password, callback)=>{
    const query=`SELECT * FROM users WHERE name = ? AND password = ?`

    const values=[username, password]

    pool.query(query, values, callback)
}

//delete
module.exports.deleteUser = (userId, callback) => {
    const query = `DELETE FROM users WHERE id = ?`
    const values = [userId]
    pool.query(query, values, callback)
}

//update
module.exports.updateUser = (newUsername, newPassword, databaseIds, callback) => {
    const query = `UPDATE users SET name = ?, password = ?, database_ids = ? WHERE id = ?`
    const values = [newUsername, newPassword, databaseIds]
    pool.query(query, values, callback)
}