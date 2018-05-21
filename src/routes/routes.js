
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
            image: "/css/images/FoxJersey.png",
            name: "Mr. Fox",
            position: "Catcher",
            number: 0,
            skill: "Empty Skill Field"
        }, {
            image: "/css/images/Blank.png",
            name: "Juan",
            position: "Outfield Left",
            number: 1+" (lol)",
            skill: "Can fold fingers behind each other"
        }, {
            image: "/css/images/Blank.png",
            name: "Daniel",
            position: "Outfield Right",
            number: 2,
            skill: "Wiggle Ears"
        }, {
            image: "/css/images/KrebsJersey.png",
            name: "Mr. Krebs",
            position: "2nd Base",
            number: 3,
            skill: "Competion Ballroom Dancer"
        }, {
            image: "/css/images/KohlerJersey.png",
            name: "Dr. Kohler",
            position: "OutField Center",
            number: 4,
            skill: "6' Wing Span"
        }, {
            image: "/css/images/Blank.png",
            name: "Mrs. Thompson",
            position: "Empty Position Field",
            number: 5,
            skill: "Empty Skill Field"
        }, {
            image: "/css/images/WarnerJersey.png",
            name: "Mr. Warner",
            position: "3rd Base",
            number: 6,
            skill: "Can sing in 2 tones"
        }, {
            image: "/css/images/Blank.png",
            name: "Mr. Rob",
            position: "Empty Postitino field",
            number: 7,
            skill: "Empty Skill Field"
        }, {
            image: "/css/images/Blank.png",
            name: "Mr. Fletcher",
            position: "Pitcher",
            number: 8,
            skill: "Speakes loudly"
        }, {
            image: "/css/images/Blank.png",
            name: "Ben",
            position: "Bench",
            number: 9,
            skill: "Writes Music"
        }, {
            image: "/css/images/Blank.png",
            name: "Jorden",
            position: "Shortstop Left",
            number: 10,
            skill: "Empty Skill Field"
        }, {
            image: "/css/images/Blank.png",
            name: "Mr. Beatty",
            position: "Empty Position Field",
            number: 11,
            skill: "Empty Skill Field"
        }, {
            image: "/css/images/Blank.png",
            name: "Mr. Harrison",
            position: "Empty Position Field",
            number: 12,
            skill: "Empty Skill Field"
        }, {
            image: "/css/images/Blank.png",
            name: "Mr. Bingham",
            position: "Empty Position Field",
            number: 13,
            skill: "Empty Skill Field"
        }, {
            image: "/css/images/Blank.png",
            name: "JP",
            position: "Empty Position Field",
            number: 14,
            skill: "Empty Skill Field"
        }]
    };
    response.render('roster', data);

}
);
router.route("/records").get(function (request, response) {
    // response.sendFile(__dirname + "/views/index.html");
    var data = {
        title: "Team Records", h1Text: "Previous Seasons", records: [{
            year: "2010",
            record: "Home:'20' Visiting:'10'"
        }, {
            year: "2011",
            record: "Home:'25' Visiting:'5'"
        }, {
            year: "2012",
            record: "Home:'14' Visiting:'3'"
        }, {
            year: "2013",
            record: "Home:'18' Visiting:'16'"
        }, {
            year: "2014",
            record: "Home:'8' Visiting:'11'"
        }, {
            year: "2015",
            record: "Home:'21' Visiting:'10'"
        }, {
            year: "2016",
            record: "Home:'9' Visiting:'5'"
        }, {
            year: "2017",
            record: "Home:'10' Visiting:'11'"
        }]
    };
    response.render('records', data);

}
);
router.route("/orders").get(function (request, response) {
    // response.sendFile(__dirname + "/views/index.html");
    var data = { title: "Orders Page", h1Text: "Team Orders Page", items:[{
        image:"/css/images/Blank.png",
        item:"Hat",
        price:1.00
    },
    {
        image:"/css/images/Blank.png",
        item:"Shirt",
        price:2.00
    },
    {
        image:"/css/images/Blank.png",
        item:"Shoes",
        price:3.00
    },
    {
        image:"/css/images/Blank.png",
        item:"Gloves",
        price:4.00
    },
    {
        image:"/css/images/Blank.png",
        item:"Pants",
        price:5.00
    },] };
    response.render('orders', data);

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
                },
                {
                    name: "NCKickballHQ",
                    phone: "555-555-5555",
                    email: "NCKickballHQ@neumont.edu"
                }
            ]

        };
        response.render("contactUs", model);
    }
);


module.exports = router;