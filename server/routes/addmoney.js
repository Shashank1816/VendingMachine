const express = require('express');
const router = express.Router();
const config = require('config');
const Coin=require("../models/coins");//coin se jo kuch bhi export kie the wo ab Coin variable me aa gaya 

module.exports=router.put("/",async(req,res)=>{
    try{
        const current=await Coin.findOne({completed:false})//isse sirf latest entry mili
        var one=req.body.one;
        var five=req.body.five;
        var ten=req.body.ten;
        var twentyfive=req.body.twentyfive;
        current.one=current.one+one;
        current.five=current.five + five;
        current.ten=current.ten+ten;
        current.twentyfive=current.twentyfive +twentyfive;
        console.log(current);
        await current.save();
        res.json(current);

    }
    catch(err){
        console.error(err.message);
      res.status(500).send('server error');

    }
})