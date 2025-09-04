//pool
const pool=require("../pool")

/*models */
//register
module.exports.registerUser=(input, callback)=>{
    const sql="INSERT INTO users (username, password, databaseName) VALUES (?, ?, ?)"
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
    const sql="SELECT * FROM users WHERE username=? AND password=?"
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
    const sql="DELETE FROM users WHERE username=? AND password=?"
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
    const sql="UPDATE users SET password=?, databaseName=? WHERE username=?"
    const arr=[input.newPassword, input.databaseName, input.username]
    pool.query(sql, arr, (err, result)=>{
        if(err){
            callback(err, null)
        }else{
            callback(null, result)
        }
    })
}
/*============================*/