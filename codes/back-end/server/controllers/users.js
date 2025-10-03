//load model
const model=require("../../database/model/users")

//register user
module.exports.registerUser=(req, res)=>{
    //input
    const {username, password}=req.body

    if(!username || !password){
        console.log("user route: register user: missing input")
        return res.status(400).json({ error: "Missing username or password" })
    }

    //callback
    const callback=(err, result)=>{
        if(err){
            console.log("user route: register user: error in saving user")
            res.status(500).json({ error: "SQL Error in saving user" })
            return
        }else{
            //success
            console.log("user route: register user: user saved")
            res.status(200).json({ message: "User registered successfully", userId: result.insertId })
            return
        }
    }

    //sql
    model.registerUser(username, password, callback)
}

//login
module.exports.loginUser=(req, res)=>{
    //input
    const {username, password}=req.body

    if(!username || !password){
        console.log("user route: login user: missing input")
        return res.status(400).json({ error: "Missing username or password" })
    }

    //callback
    const callback=(err, result)=>{
        if(err){
            console.log("user route: login user: error in finding user")
            return res.status(500).json({ error: "SQL Error in finding user" })
        }else{
            //success
            console.log("user route: login user: user found")
            return res.status(200).json({ message: "User logged in successfully", user: result })
        }
    }

    //sql
    model.loginUser(username, password, callback)
}

//delete
module.exports.deleteUser=(req, res)=>{
    //input
    const {userId}=req.body

    if(!userId){
        console.log("user route: delete user: missing input")
        return res.status(400).json({ error: "Missing userId" })
    }

    //callback
    const callback=(err, result)=>{
        if(err){
            console.log("user route: delete user: error in deleting user")
            return res.status(500).json({ error: "SQL Error in deleting user" })
        }else{
            //success
            console.log("user route: delete user: user deleted")
            return res.status(200).json({ message: "User deleted successfully" })
        }
    }

    //sql
    model.deleteUser(userId, callback)
}

//update

module.exports.updateUser=(req, res)=>{
    //input
    const {userId, newUsername, newPassword, databaseIds}=req.body
    if(!userId || (!newUsername && !newPassword && !databaseIds)){
        console.log("user route: update user: missing input")
        res.status(400).json({ error: "Missing userId or fields to update" })
        return
    }

    //callback
    const callback=(err, result)=>{
        if(err){
            console.log("user route: update user: error in updating user")
            return res.status(500).json({ error: "SQL Error in updating user" })
        }else{
            //success
            console.log("user route: update user: user updated")
            return res.status(200).json({ message: "User updated successfully" })
        }
    }

    //sql
    model.updateUser(userId, newUsername, newPassword, databaseIds, callback)
}