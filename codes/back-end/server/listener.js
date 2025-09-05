const express = require('express');

const app = express();

const PORT = 3000;

const IP = "127.0.0.1";

module.exports.listen = function(){
    app.listen(PORT, IP, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}