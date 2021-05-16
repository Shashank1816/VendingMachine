const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoinSchema = new Schema({
    one:{
        type:Number,
        default:0
    },
    five:{
        type:Number,
        default:0
    },
    ten:{
        type:Number,
        default:0
    },
    twentyfive:{
        type:Number,
        default:0
    },
    coke:{
        type:Number,
        default:0
    },
    pepsi:{
        type:Number,
        default:0
    },
    soda:{
        type:Number,
        default:0
    },
    completed:{
        type:Boolean,
        default:false
    },

    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('coins',CoinSchema); //we exported CoinSchema

// CoinSchema is a structure for MongoDB