var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Foxbards Den', 
                        subtitle: 'Programming the Bards way..',
                        time: Date().toLocaleString()
      });
});

router.get('/nodejs',function(req, res, next) {
  res.render('nodejs', { title: 'Foxbards Den', 
                        subtitle: 'Programming the Bards way..',
                        time: Date().toLocaleString()
      });

})

module.exports = router;
