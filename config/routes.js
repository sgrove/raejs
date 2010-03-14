router = require('../lib/router').router

router.resource("post");
router.root({controller: "home", action: "welcome"});

exports.router = router;
