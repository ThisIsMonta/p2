const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    address: {
        building: Date,
        coord: Number,
        street: String,
        zipcode: Date
    },
    borough:String,
    cuisine: String,
    grades: [
        {
            date:Date,
            grade:String,
            score:Number
        }
    ],
    name: String,
    restaurant_id:String
});

module.exports = mongoose.model('Restaurant',restaurantSchema);