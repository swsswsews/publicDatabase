//get pool
const pool=require("../../database/pool")

//add database
module.exports.addDatabase=(databaseName, ownerId, callback)=>{

    const query=`
    CREATE DATABASE \`${databaseName}\`;
    INSERT INTO userdatabase (name, owner_id) VALUES (?, ?);
    `

    const values=[databaseName, ownerId]

    pool.query(query, values, callback)
}

//get database
module.exports.getDatabase=(databaseId, callback)=>{
    const query=`
    SELECT * FROM userdatabase WHERE id = ?;
    `

    const values=[databaseId]

    pool.query(query, values, callback)
}

/*
==========================================================contents management========================================================
*/

//display editable content
module.exports.getEditableContent=(databaseId, callback)=>{
    const query=`
    SELECT * FROM information_schema.TABLES WHERE TABLE_SCHEMA = (SELECT name FROM userdatabase WHERE id = ?);
    `

    const values=[databaseId]

    pool.query(query, values, callback)
}

//edit
module.exports.editContent={
    //add table
    addTable:(databaseName, tableName, callback)=>{
        const query=`
        use \`${databaseName}\`;
        CREATE TABLE \`${tableName}\` (
            id INT AUTO_INCREMENT PRIMARY KEY
        );
        `

        pool.query(query, [null], callback)
    },

    //delete table
    deleteTable:(databaseName, tableName, callback)=>{
        const query=`
        use \`${databaseName}\`;
        DROP TABLE \`${tableName}\`;
        `

        pool.query(query, [null], callback)
    },

    //add column
    addColumn:(databaseName, tableName, columnName, columnType, callback)=>{
        const query=`
        use \`${databaseName}\`;
        ALTER TABLE \`${tableName}\`
        ADD COLUMN \`${columnName}\` ${columnType};
        `

        pool.query(query, [null], callback)
    },

    //delete column
    deleteColumn:(databaseName, tableName, columnName, callback)=>{
        const query=`
        use \`${databaseName}\`;
        ALTER TABLE \`${tableName}\`
        DROP COLUMN \`${columnName}\`;
        `
        pool.query(query, [null], callback)
    },

    //add value
    addValue:(databaseName, tableName, columnName, value, callback)=>{
        const query=`
        use \`${databaseName}\`;
        INSERT INTO \`${tableName}\` (\`${columnName}\`) VALUES (?);
        `
        const values=[value]
        pool.query(query, values, callback)
    },

    //delete value
    deleteValue:(databaseName, tableName, valueId, callback)=>{
        const query=`
        use \`${databaseName}\`;
        DELETE FROM \`${tableName}\` WHERE id = ?;
        `
        const values=[valueId]
        pool.query(query, values, callback)
    },

    //edit value
    editValue:(databaseName, tableName, columnName, oldValue, newValue, callback)=>{
        const query=`
        use \`${databaseName}\`;
        UPDATE \`${tableName}\` SET \`${columnName}\` = ? WHERE \`${columnName}\` = ?;
        `
        const values=[newValue, oldValue]
        pool.query(query, values, callback)
    }
}

//get data
module.exports.getData=(databaseName, tableName, callback)=>{
    const query=`
    use ${databaseName};
    SELECT * FROM \`${tableName}\`;
    `
    pool.query(query, [null], callback)
}
/*
==========================================================contents management========================================================
*/

//delete database
module.exports.deleteDatabase=(databaseName, callback)=>{
    const query=`
    DELETE FROM userdatabase WHERE name = ?;

    DROP DATABASE \`${databaseName}\`;
    `
    const values=[databaseName]
    pool.query(query, values, callback)
}

//get database name
module.exports.getDatabaseName=(databaseId, callback)=>{
    const query=`
    SELECT name FROM userdatabase WHERE id = ?;
    `

    const values=[databaseId]

    pool.query(query, values, callback)
}