const express = require('express');
const router = express.Router();
const config = require('config');
const Coin=require("../models/coins");//coin se jo kuch bhi export kie the wo ab Coin variable me aa gaya 

module.exports=router.put("/",async(req,res)=>{
    try{
        const current=await Coin.findOne({completed:false})//isse sirf latest entry mili
        
        const max=50;//this is the maximum capacity of the vending machine for each type of bottle
        const remaining=await Coin.find({});
        var soldpepsi=0;
        var soldcoke=0;
        var soldsoda=0;

        for(var i=0;i<remaining.length;i++)
        {
            if(remaining[i].completed==true)
            {
                soldpepsi=soldpepsi+remaining[i].pepsi;
                soldcoke=soldcoke+remaining[i].coke;
                soldsoda=soldsoda+remaining[i].soda;
            }
        }

        var remsoda,remcoke,rempepsi;
        remsoda=max-soldsoda;
        remcoke=max-soldcoke;
        rempepsi=max-soldpepsi;


        const curr=await Coin.findOne({completed:false})//isse sirf latest entry mili
        

        if((req.body.soda)>remsoda)// || (req.body.pepsi)>rempepsi || (req.body.coke)>remcoke)
        {
            var mess="Your transaction cannot be completed due to less amount of soda! Number of Soda available are "+remsoda+" Please Collect Your Money!"; 
            await curr.remove();
            return res.send(mess);
        }
        else if ((req.body.pepsi)>rempepsi)
        {
            var mess="Your transaction cannot be completed due to less amount of pepsi! Number of Pepsi available are "+rempepsi+" Please Collect Your Money!";
            await curr.remove();
            return res.send(mess);
        }
        else if((req.body.coke)>remcoke)
        {
            var mess="Your transaction cannot be completed due to less amount of coke! Number of coke available are "+remcoke+" Please Collect Your Money!";
            await curr.remove();
            return res.send(mess);
        }
        
        



        console.log(current);
        current.pepsi=req.body.pepsi;
        current.soda=req.body.soda;
        current.coke=req.body.coke;
        console.log(current);
        await current.save();
        res.json(current);

    }
    catch(err){
        console.error(err.message);
      res.status(500).send('server error');

    }
})