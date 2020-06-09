var vows = require('vows'),
    assert = require('assert'),
	reverseP = require('../index');

vows.describe('Backend').addBatch({
    'when create a backend without options': {
        topic: function () {
			return new reverseP.Backend();
		},

        'we get and Error': function (topic) {
            assert.throws(topic, Error);
        }
    },
	'when create a backend with options': {
		topic : function() {
			var options = {
				port : 1010,
				host : "10.10.10.10"
			}
			return new reverseP.Backend(options);
		},
		
		'we get a backend': {
			'with a port equal to "1010"' : function(topic) {
				assert.equal(topic.port, 1010);
			},
			'with a host equal to "10.10.10.10"' : function(topic) {
				assert.equal(topic.host, "10.10.10.10");
			}
		}
	}
}).run(); // Run it