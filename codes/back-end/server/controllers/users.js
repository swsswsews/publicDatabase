//load models
const models=require('../../database/model/users')

//register
module.exports.registerUser=async (req, res, next)=>{
    console.log("controller registerUser acativated")
    //input
    const input=req.body
    if(!input.username || !input.password || !input.databaseName){
        console.log("user route: registerUser route:\n"+"status: fail"+"\n"+"error: invalid input")
        res.status(400).send("invalid input").end()
        return
    }

    //callback
    const callback=(err, output)=>{
        if(err){
            console.log("user route: registerUser route:\n"+"status: fail"+"\n"+"error: "+err)
            res.status(500).send("register fail due to sql error").end()
            return
        }else{
            console.log("user route: registerUser route:\n"+"status: success"+"\n"+"output: "+output)
            
            return
        }
    }

    //sql 
    models.registerUser(input, callback)
}

//login
module.exports.loginUser=(req, res, next)=>{
    //input
    const input=req.body
    if(!input.name || !input.password){
        console.log("user route: loginUser route: \n"+
                    "status: "+"fail"+"\n"+
                    "error: invalid input"
        )
        res.status(400).send("invalid input").end()
        return
    }

    //callback
    const callback=(err, output)=>{
        if(err){
            console.log("user route: loginUser route: \n"+
                        "status: fail"+"\n"+
                        "error: "+err
                       )
            
            res.status(500).send("login fail due to sql error, please check if username and password are correct").end()
            return
        }else{
            console.log("user route: loginUser route: \n"+
                        "status: success"+"\n"+
                        "output: "+output
                       )
            return
        }
    }

    //sql
    models.loginUser(input, callback)
}

//delete
module.exports.deleteUser=(req, res, next)=>{
    //input
    const input=req.body
    if(!input.username || !input.password){
        console.log("user route: deleteUser route:\n"+"status: fail"+"\n"+"error: invalid input")
        res.status(400).send("invalid input").end()
        return
    }

    //callback
    const callback=(err, output)=>{
        if(err){
            console.log("user route: deleteUser route:\n"+"status: fail"+"\n"+"error: "+err)
            res.status(500).send("delete fail due to sql error").end()
            return
        }else{
            console.log("user route: deleteUser route:\n"+"status: success"+"\n"+"output: "+output)

            return
        }
    }

    //sql
    models.deleteUser(input, callback)
}

//update
module.exports.updateUser=(req, res, next)=>{
    //input
    const input=req.body
    if(!input.username || !input.password || !input.newPassword){
        console.log("user route: updateUser route:\n"+"status: fail"+"\n"+"error: invalid input")
        res.status(400).send("invalid input").end()
        return
    }

    //callback
    const callback=(err, output)=>{
        if(err){
            console.log("user route: updateUser route:\n"+"status: fail"+"\n"+"error: "+err)
            res.status(500).send("update fail due to sql error").end()
            return
        }else{
            console.log("user route: updateUser route:\n"+"status: success"+"\n"+"output: "+output)
            return
        }
    }

    //sql
    models.updateUser(input, callback)
}