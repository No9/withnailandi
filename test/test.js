var test = require('tape');
var withnail = require('../');


test('make sure my code works', function (t) {
	t.plan(2);
	withnail.getline(1, 2, function(err, lines){
  		t.equal( lines[0], 'Withnail and I' );  	
    	t.equal( lines[1], '' );
	})
});
