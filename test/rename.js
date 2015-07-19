var   should = require('chai').should()
    , expect = require('chai').expect
    , rename = require('../lib/index')
    ;
describe('Testing module', function() {
    var test = {
        sn:{
            sn:{
                sn:"nested key",
                s3:"hi"
            },
            s2 : {
            	s22: "coucou", 
            	sn:"nested key"
            }
        },
        s1 : {sn:"nested key"}
    }
    
    it('should be valid', function (done) {
    	console.log("Old object", JSON.stringify(test));
        var newobj = rename(test, function(key){
	        switch(key) {
	        	case "sn" : return "cn";
	        }
	    });
        console.log("New object", JSON.stringify(newobj))
        done();
    });
});
