var request = require('request');
module.exports = {
  getRates: function(amount){
  var url = 'http://api.fixer.io/latest';
    // var amount = req.body
    request.get(url, function(err, response, body){
      if(err){
          return res.status(500).send({error: 'Error getting currency rates' + err});
      }
      else{
        // returned data
        var fx = body;

        fx.settings = {from : 'EUR',
                        to: 'USD'};
        fx.convert = (amount);
         console.log(fx.convert);
        // convert
        // return res.send({data:body});
      }
    });
  }
}

module.exports.getRates(1000);
