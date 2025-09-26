/*add database and its info-->get database info-->get data--> -->display editable content-->edit data or info-->delete datbase and its info*/
//get model
const model=require("../../database/model/databases")

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

            res.status(200).json({message: "Successfully added database", databasename: name})
            return
        }
    }

    model.addDatabase(name, ownerId, callback)
}

//get database
module.exports.getDatabase=(req, res)=>{
    const {databaseId} = req.body
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

/*
==========================================================contents management========================================================
*/

//display editable content
module.exports.getEditableContent=(req, res)=>{
    const {databaseId}=req.body
    if(!databaseId){
        console.log("database route: getEditableContent: Missing input")
        res.status(400).json({message: "Missing input"})
        return
    }

    const callback=(err, result)=>{
        if(err){
            console.log("database route: getEditableContent: Error in getting editable content", err)
            res.status(500).json({message: "Error in getting editable content"})
            return
        }else{
            console.log("database route: getEditableContent: Successfully got editable content")
            res.status(200).json({message: "Successfully got editable content", data: result})
            return
        }
}

    model.getEditableContent(databaseId, callback)
}

//edit
module.exports.editContent={
    //add table
    addTable:(req, res)=>{
        const {databaseId, tableName} = req.body

        if(!databaseId || !tableName){
            console.log("database route: editContent.addTable: Missing input")
            res.status(400).json({message: "Missing input"})
            return
        }

        const callback=(err, result)=>{
            if(err){
                console.log("database route: editContent.addTable: Error in adding table", err)
                res.status(500).json({message: "Error in adding table"})
                return
            }else{
                console.log("database route: editContent.addTable: Successfully added table")
                res.status(200).json({message: "Successfully added table"})
                return
            }
        }

        //get database name
        const databaseName=model.getDatabaseName(databaseId, callback)

        model.editContent.addTable(databaseName, tableName, callback)
    },

    //delete table
    deleteTable:(req, res)=>{
        const {databaseId, tableName} = req.body
        if(!databaseId || !tableName){
            console.log("database route: editContent.deleteTable: Missing input")
            res.status(400).json({message: "Missing input"})
            return
        }

        const callback=(err, result)=>{
            if(err){
                console.log("database route: editContent.deleteTable: Error in deleting table", err)
                res.status(500).json({message: "Error in deleting table"})
                return
            }else{
                console.log("database route: editContent.deleteTable: Successfully deleted table")
                res.status(200).json({message: "Successfully deleted table"})
                return
            }
        }

        //get database name
        const databaseName=model.getDatabaseName(databaseId, callback)

        model.editContent.deleteTable(databaseName, tableName, callback)
    },

    //add column
    addColumn:(req, res)=>{
        const {databaseId, tableName, columnName, columnType} = req.body
        if(!databaseId || !tableName || !columnName || !columnType){
            console.log("database route: editContent.addColumn: Missing input")
            res.status(400).json({message: "Missing input"})
            return
        }

        const callback=(err, result)=>{
            if(err){
                console.log("database route: editContent.addColumn: Error in adding column", err)
                res.status(500).json({message: "Error in adding column"})
                return
            }else{
                console.log("database route: editContent.addColumn: Successfully added column")
                res.status(200).json({message: "Successfully added column"})
                return
            }
        }

        //get database name
        const databaseName=model.getDatabaseName(databaseId, callback)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

        model.editContent.addColumn(databaseName, tableName, columnName, columnType, callback)
    },

    //delete column
    deleteColumn:(req, res)=>{
        const {databaseId, tableName, columnName} = req.body
        if(!databaseId || !tableName || !columnName){
            console.log("database route: editContent.deleteColumn: Missing input")
            res.status(400).json({message: "Missing input"})
            return
        }

        const callback=(err, result)=>{
            if(err){
                console.log("database route: editContent.deleteColumn: Error in deleting column", err)
                res.status(500).json({message: "Error in deleting column"})
                return
            }else{
                console.log("database route: editContent.deleteColumn: Successfully deleted column")
                res.status(200).json({message: "Successfully deleted column"})
                return
            }
        }

        //get database name
        const databaseName=model.getDatabaseName(databaseId, callback)

        model.editContent.deleteColumn(databaseName, tableName, columnName, callback)
    },

    //add value
    addValue:(req, res)=>{
        const {databaseId, tableName, columnName,value} = req.body
        if(!databaseId || !tableName || !columnName || !value){
            console.log("database route: editContent.addValue: Missing input")
            res.status(400).json({message: "Missing input"})
            return
        }

        const callback=(err, result)=>{
            if(err){
                console.log("database route: editContent.addValue: Error in adding value", err)
                res.status(500).json({message: "Error in adding value"})
                return
            }else{
                console.log("database route: editContent.addValue: Successfully added value")
                res.status(200).json({message: "Successfully added value"})
                return
            }
        }

        //get database name
        const databaseName=model.getDatabaseName(databaseId, callback)

        model.editContent.addValue(databaseName, tableName, columnName, value, callback)
    },

    //delete value
    deleteValue:(req, res)=>{
        const {databaseId, tableName, columnName, valueId} = req.body
        if(!databaseId || !tableName || !columnName || !valueId){
            console.log("database route: editContent.deleteValue: Missing input")
            res.status(400).json({message: "Missing input"})
            return
        }

        const callback=(err, result)=>{
            if(err){
                console.log("database route: editContent.deleteValue: Error in deleting value", err)
                res.status(500).json({message: "Error in deleting value"})
                return
            }else{
                console.log("database route: editContent.deleteValue: Successfully deleted value")
                res.status(200).json({message: "Successfully deleted value"})
                return
            }
        }

        //get database name
        const databaseName=model.getDatabaseName(databaseId, callback)

        model.editContent.deleteValue(databaseName, tableName, columnName, valueId, callback)
    },

    //edit value
    editValue:(req, res)=>{
        //input
        const {databaseId, tableName, columnName, oldValue, newValue} = req.body

        if(!databaseId || !tableName || !columnName || !oldValue || !newValue){
            console.log("database route: editContent.editValue: Missing input")
            res.status(400).json({message: "Missing input"})
            return
        }

        const callback=(err, result)=>{
            if(err){
                console.log("database route: editContent.editValue: Error in editing value", err)
                res.status(500).json({message: "Error in editing value"})
                return
            }else{
                console.log("database route: editContent.editValue: Successfully edited value")
                res.status(200).json({message: "Successfully edited value"})
                return
            }
        }

        //get database name
        const databaseName=model.getDatabaseName(databaseId, callback)

        model.editContent.editValue(databaseName, tableName, columnName, oldValue, newValue, callback)
    }

}


//get data
module.exports.getData=(req, res)=>{
    //input
    const {databaseId}=req.body
    if(!databaseId){
        console.log("database route: getData: Missing input")
        res.status(400).json({message: "Missing input"})
        return
    }

    //callback
    const callback=(err, result)=>{
        if(err){
            console.log("database route: getData: Error in getting data", err)
            res.status(500).json({message: "Error in getting data"})
            return
        }else{
            console.log("database route: getData: Successfully got data")
            res.status(200).json({message: "Successfully got data", data: result})
            return
        }
    }

    //query
    model.getData(databaseId, callback)
}

/*
==========================================================contents management========================================================
*/


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

    const databaseName= model.getDatabaseName(databaseId, callback)

    model.deleteDatabase(databaseName, callback)
}