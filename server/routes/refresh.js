const express = require('express');
const router = express.Router();
const config = require('config');
const Coin=require("../models/coins");//coin se jo kuch bhi export kie the wo ab Coin variable me aa gaya 

module.exports=router.delete("/",async(req,res)=>{
    try{
        const current=await Coin.findOne({completed:false})//isse sirf latest entry mili
        await current.remove();
        res.json("Transaction Terminated! Please Collect Your Money");
    }
    catch(err){
        console.error(err.message);
      res.status(500).send('server error');

    }
})