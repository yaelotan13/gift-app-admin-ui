const userMock = require('../data/user');

function logIn(req, res) {
    console.log('[POST] /admin/users');
    console.log('body:');
    console.log(req.body);
    const password = req.body.password;

    if (userMock.isValidPassword(password)) {
        res.status(200);
    } else {
        res.status(301)
    }
};

module.exports = {
    logIn,
}