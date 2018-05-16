
var express = require('express');

var router = express.Router();

router.route("/").get(function (request, response) {
    // response.sendFile(__dirname + "/views/index.html");
    var data = { title: "Index Page", h1Text: "Neumont Kangaroos Kickball Team", contactus: "Contact Us" };
    response.render('index', data);

}
);
router.route("/roster").get(function (request, response) {
    // response.sendFile(__dirname + "/views/index.html");
    var data = { title: "Team Roster", h1Text: "Roster" };
    response.render('roster', data);

}
);
router.route("/records").get(function (request, response) {
    // response.sendFile(__dirname + "/views/index.html");
    var data = { title: "Team Records", h1Text: "Previous Seasons" };
    response.render('records', data);

}
);
router.route("/orders").get(function (request, response) {
    // response.sendFile(__dirname + "/views/index.html");
    var data = { title: "Orders Page", h1Text: "Team Orders Page" };
    response.render('index', data);

}
);
router.route("/contactUs").get(
    function (request, response) {
        //var data = repo.getContactUsData();

        var model = {
            title: "Contact Us Page",
            h1Text: "Contact Us Here!",
            contactData: [
                {
                    name: "Juan",
                    phone: "123-456-7890",
                    email: "Jtaguilar@student.neumont.edu"
                },
                {
                    name: "DCorum",
                    phone: "098-765-4321",
                    email: "Dcorum@student.neumont.edu"
                }
            ]

        };
        response.render("contactUs", model);
    }
);


module.exports = router;