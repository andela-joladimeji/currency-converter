module.exports = function(app) {
    var api = require('../api.js');
    app.route('/getRates').get(api.getRates);
};
