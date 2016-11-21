var request = require('request');
module.exports = {
  getRates: function(){
  var url = 'http://api.fixer.io/latest';
    request.get(url, function(err, response, body){
      if(err){
          return 'Error getting currency rates' + err;
      }
      else{
        var data = body;
        return body;
      }
    });

  }
}
module.exports.getRates();