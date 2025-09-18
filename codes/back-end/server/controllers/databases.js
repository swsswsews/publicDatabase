//get model
const model=null

//add database
module.exports.addDatabase=(req, res)=>{
    const {name, ownerId} = req.body
    if(!name || !ownerId){
        console.log("database route: addDatabase: Missing input")

        res.status(400).json({message: "Missing input"})
        return
    }

    const callback=(err, result)=>{
        if(err){
            console.log("database route: addDatabase: Error in adding database", err)

            res.status(500).json({message: "Error in adding database"})
            return
        }else{
            console.log("database route: addDatabase: Successfully added database")

            res.status(200).json({message: "Successfully added database"})
            return
        }
    }

    model.addDatabase(name, ownerId, callback)
}

//get database
module.exports.getDatabase=(req, res)=>{
    const {databaseId} = req.query
    if(!databaseId){
        console.log("database route: getDatabase: Missing input")
        res.status(400).json({message: "Missing input"})
        return
    }

    const callback=(err, result)=>{
        if(err){
            console.log("database route: getDatabase: Error in getting database", err)
            res.status(500).json({message: "Error in getting database"})
            return
        }else{
            console.log("database route: getDatabase: Successfully got database")
            res.status(200).json({message: "Successfully got database", data: result})
            return
        }
    }

    model.getDatabase(databaseId, callback)
}

//edit database
module.exports.editDatabase=(req, res)=>{
    const {databaseId, tables, columns} = req.body
    if(!databaseId){
        console.log("database route: editDatabase: Missing input")
        res.status(400).json({message: "Missing input"})
        return
    }

    const callback=(err, result)=>{
        if(err){
            console.log("database route: editDatabase: Error in editing database", err)
            res.status(500).json({message: "Error in editing database"})
            return
        }else{
            console.log("database route: editDatabase: Successfully edited database")
            res.status(200).json({message: "Successfully edited database", data: result})
            return
        }
    }

    model.editDatabase(databaseId, callback)
}

//delete database
module.exports.deleteDatabase=(req, res)=>{
    const {databaseId} = req.body
    if(!databaseId){
        console.log("database route: deleteDatabase: Missing input")
        res.status(400).json({message: "Missing input"})
        return
    }

    const callback=(err, result)=>{
        if(err){
            console.log("database route: deleteDatabase: Error in deleting database", err)
            res.status(500).json({message: "Error in deleting database"})
            return
        }else{
            console.log("database route: deleteDatabase: Successfully deleted database")
            res.status(200).json({message: "Successfully deleted database"})
            return
        }
    }

    model.deleteDatabase(databaseId, callback)
}