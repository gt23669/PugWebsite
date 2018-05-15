
var express = require('express');

var router = express.Router();

router.route("/").get(function (request, response) {
    // response.sendFile(__dirname + "/views/index.html");
    var data = { title: "Pug is the best Index Page", h1Text: "Neumont Kangaroos Kickball Team", contactus: "Contact Us" };
    response.render('index', data);

}
);
router.route("/roster").get(function (request, response) {
    // response.sendFile(__dirname + "/views/index.html");
    var data = { title: "Pug is the best Index Page", h1Text: "Roster" };
    response.render('roster', data);

}
);
router.route("/records").get(function (request, response) {
    // response.sendFile(__dirname + "/views/index.html");
    var data = { title: "Pug is the best Index Page", h1Text: "Previous Seasons" };
    response.render('records', data);

}
);
router.route("/page4").get(function (request, response) {
    // response.sendFile(__dirname + "/views/index.html");
    var data = { title: "Pug is the best Index Page", h1Text: "Text in the h1 Tag" };
    response.render('index', data);

}
);
router.route("/contactUs").get(
    function (request, response) {
        //var data = repo.getContactUsData();

        var model = {
            title: "Contact Us Page",
            h1Text: "Contact Us Page h1 Text",
            contactData: [
                {
                    name: "Susan",
                    phone: "555-555-5555",
                    email: "SueDawg@here.now"
                },
                {
                    name: "Pete",
                    phone: "555-555-6666",
                    email: "PeteIsAwesome@here.now"
                }
            ]

        };
        response.render("contactUs", model);
    }
);


module.exports = router;