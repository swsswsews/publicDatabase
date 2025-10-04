//load home page
module.exports.loadHomePage = (req, res) => {
    res.sendFile('../../../front-end/html/homePage.ejs');
}

//load register page
module.exports.loadRegisterPage = (req, res) => {
    res.sendFile('../../../front-end/html/registerPage.ejs');
}

//load login pages
module.exports.loadLoginPage = (req, res) => {
    res.sendFile('../../../front-end/html/loginPage.ejs');
}

//load profiled
module.exports.loadProfilePage = (req, res) => {
    const username = req.user
    const password = req.user
    res.render('../../../front-end/html/profilePage.ejs', { username: username, password:password});
}

//load databaseInfo page
module.exports.loadDatabaseInfoPage = (req, res) => {
    const userId = req.user
    res.render('../../../front-end/html/databaseInfoPage.ejs', { userId: userId});
}