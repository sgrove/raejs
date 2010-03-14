router = require('../lib/router')
router = router.router // Figure out how to export properly...

router.resource("post");
router.root({controller: "home", action: "welcome"});

exports.router = router;
