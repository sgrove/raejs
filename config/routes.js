router = require('../lib/router').router

router.resource("post");
router.resource("product");
router.map({path: "/sandbox/:id/:action", controller: "home", action: "sandbox"});3
router.map({path: "/about", controller: "home", action: "about"});3
router.root({controller: "home", action: "welcome"});

exports.router = router;
