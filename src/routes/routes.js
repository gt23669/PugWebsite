
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
    var data = {
        title: "Team Roster", h1Text: "Roster", roster: [{
            name: "Mr. Fox",
            position: "Catcher",
            number: 0,
            skill:""
        }, {
            name: "Juan",
            position: "Outfield Left",
            number: 1,
            skill:"Can fold fingers behind each other"
        }, {
            name: "Daniel",
            position: "Outfield Right",
            number: 2,
            skill:"Wiggle Ears"
        }, {
            name: "Mr. Krebs",
            position: "",
            number: 3,
            skill:""
        }, {
            name: "Mr. Cox",
            position: "",
            number: 4,
            skill:""
        }, {
            name: "Mrs. Thompson",
            position: "",
            number: 5,
            skill:""
        }, {
            name: "Mr. Warner",
            position: "",
            number: 6,
            skill:""
        }, {
            name: "Mr. Kohler",
            position: "",
            number: 7,
            skill:""
        }, {
            name: "Mr. Rob",
            position: "",
            number: 8,
            skill:""
        }, {
            name: "Ben",
            position: "Bench",
            number: 9,
            skill:""
        }, {
            name: "Jorden",
            position: "Shortstop Left",
            number: 10,
            skill:""
        }, {
            name: "Mr. Beatty",
            position: "",
            number: 11,
            skill:""
        }, {
            name: "Mr. Harrison",
            position: "",
            number: 12,
            skill:""
        }, {
            name: "Mr. Bingham",
            position: "",
            number: 13,
            skill:""
        }, {
            name: "JP",
            position: "",
            number: 14,
            skill:""
        }]
    };
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