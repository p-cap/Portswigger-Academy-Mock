const AppsController = require('../controllers/AppsController')

module.exports = (app) => {
    app.get('/posts', AppsController.greeting)
}