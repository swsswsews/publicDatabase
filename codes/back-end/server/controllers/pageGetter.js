//load home page
module.exports.loadHomePage = (req, res) => {
    res.sendFile('../../../front-end/html/homePage.ejs');
}

//load register page
module.exports.loadRegisterPage = (req, res) => {
    res.sendFile('../../../front-end/html/registerPage.ejs');
}

//load login page
module.exports.loadLoginPage = (req, res) => {
    res.sendFile('../../../front-end/html/loginPage.ejs');
}

//load profile
module.exports.loadProfilePage = (req, res) => {
    res.render('../../../front-end/html/profilePage.ejs');
}

//load databaseInfo page
module.exports.loadDatabaseInfoPage = (req, res) => {
    res.render('../../../front-end/html/databaseInfoPage.ejs');
}