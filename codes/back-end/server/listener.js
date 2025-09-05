const express = require('express')

const PORT = 3000

const IP = "127.0.0.1"

module.exports.listen = function(app){
    app.listen(PORT,() => {
        console.log(`Server is listening on port ${PORT}`);
    })
}