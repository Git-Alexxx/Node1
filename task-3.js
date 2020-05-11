const request = require("request");

  
request.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3", function(err, res, body) {   
    if(err){
        throw err;
    };
    console.log(JSON.parse(body));
});