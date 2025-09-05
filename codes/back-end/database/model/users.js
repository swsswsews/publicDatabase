//pool
const pool=require("../pool")

/*models */
//register
module.exports.registerUser=(input, callback)=>{
    const sql="INSERT INTO users (name, password) VALUES (?, ?)"
    const arr=[input.username, input.password, input.databaseName]
    pool.query(sql, arr, (err, result)=>{
        if(err){
            callback(err, null)
        }else{
            callback(null, result)
        }
    })
}

//login
module.exports.loginUser=(input, callback)=>{
    const sql="SELECT * FROM users WHERE name=? AND password=?"
    const arr=[input.username, input.password]
    pool.query(sql, arr, (err, result)=>{
        if(err){
            callback(err, null)
        }else{
            callback(null, result)
        }
    })
}

//delete
module.exports.deleteUser=(input, callback)=>{
    const sql="DELETE FROM users WHERE name=? AND password=?"
    const arr=[input.username, input.password]
    pool.query(sql, arr, (err, result)=>{
        if(err){
            callback(err, null)
        }else{
            callback(null, result)
        }
    })
}

//update
module.exports.updateUser=(input, callback)=>{
    const sql="UPDATE users SET password=?, database_ids=? WHERE name=? && password=?"
    const arr=[input.newPassword, input.databaseId, input.username, input.password]
    pool.query(sql, arr, (err, result)=>{
        if(err){
            callback(err, null)
        }else{
            callback(null, result)
        }
    })
}
/*============================*/