const pool=require("./pool.js")

const query=`
DROP DATABASE IF EXISTS databaseInfo;

CREATE SCHEMA databaseInfo;

CREATE TABLE databaseInfo.users (
      id int primary key not null unique auto_increment, 
      name varchar(50) not null unique,
      database_ids json,
      password varchar(10) not null unique
);

CREATE TABLE databaseInfo.userDatabase(
      id int primary key not null unique auto_increment,
      name varchar(50) not null unique,
      owner_id int not null 
)
`
const callback=(error,results)=>{
      if(error){
            console.error("Error creating database schema:", error);
            return;
      }
      console.log("Database schema created successfully:", results);
}

pool.query(query, callback)