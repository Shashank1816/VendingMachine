const express = require('express');
const router = express.Router();
const config = require('config');
const Coin=require("../models/coins");//coin se jo kuch bhi export kie the wo ab Coin variable me aa gaya 

module.exports=router.post('/',async(req,res)=>{
    
    try {
        
        const newPurchase=new Coin({
            one:req.body.one,
            five:req.body.five,
            ten:req.body.ten,
            twentyfive:req.body.twentyfive
        });//array ko schema me daala
        const result = await newPurchase.save();
        res.json(result);

    }
    catch(err){
        console.error(err.message);
      res.status(500).send('Server Error');
    }
} )

