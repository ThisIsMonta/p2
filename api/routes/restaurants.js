const express = require('express');
const router = express.Router();

const Restaurant = require('../models/restaurant');

var data = [];

router.get('/getRestaurants', (req, res, next) => {
    // Restaurant.find({"borough" : "Bronx"})
    //     .exec()
    //     .then(doc => {
    //     console.log(doc);
    //     res.status(200).json(doc);
    // }).catch(err => {
    //     res.status(500).json({
    //         error: err
    //     });
    // });
    Restaurant.distinct('borough', (err, res) => {
        if (err)
            throw err;
        }).then((docs) => {
            if (docs) {
            var boroughs = docs;
            console.log(boroughs);
            boroughs.forEach(element => {
                Restaurant.countDocuments({"borough":element},(err,c)=>{
                }).then((c)=>{
                    data.push("<h1>"+element+" : "+c+"</h1><br>");
                });
            });
        }
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(""+data);  
        res.end(); 
    });
})


module.exports = router;