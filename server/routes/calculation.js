const express = require('express');
const router = express.Router();
const config = require('config');
const Coin=require("../models/coins");//coin se jo kuch bhi export kie the wo ab Coin variable me aa gaya 

module.exports=router.put("/",async(req,res)=>{
    try{
        const current=await Coin.findOne({completed:false})//isse sirf latest entry mili
        var one=current.one;
        var five=current.five;
        var ten=current.ten;
        var twentyfive=current.twentyfive;
        var coke=current.coke;
        var soda=current.soda;
        var pepsi=current.pepsi;
        const cokeP=25;
        const sodaP=47;
        const pepsiP=32;
        var totalentered=(one*1)+(five*5)+(ten*10)+(twentyfive*25);
        console.log(totalentered);
        var totalrequested=(cokeP*coke) + (sodaP*soda) +(pepsiP*pepsi);
        var returnamount;
        if(totalentered>=totalrequested)
        {
            returnamount=totalentered-totalrequested;
            current.completed=true;
            await current.save();
            var mess="Your order is delivered Successfully! Please don't forget to collect the remaining cash of Rs. "+returnamount;
            
            return res.send(mess);
        }
        else
        {
            returnamount=totalrequested-totalentered;
            var mess="transaction cannot be completed due to insufficient amount! Enter Rs."+returnamount+" more.";
            return res.send(mess);
        }

    }
    catch(err){
        console.error(err.message);
      res.status(500).send('server error');

    }
})