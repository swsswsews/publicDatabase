const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

module.exports.listen = function(){
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}