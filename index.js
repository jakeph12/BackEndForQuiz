const exress = require('express');
const memory = require('./info.json');


const Port = process.env.Port || 3001;

const app = exress();

app.listen(Port,()=>{
    console.log("Server start");
});

app.get('*',(req,res)=>{
    console.log(req.url);
    if(req.url.startsWith("/User"))
    SeyHi(req,res).finally();
});
async function SeyHi(req,res){
    var rq = req.url;
    var all = rq.split('?');
    var na = "You write th wrong";
    var t = false;
    if(all.length < 2) na = "Guest";
    else {
        var alls = all[1].split('.');
        for(var i = 0;i < memory.Player.length;i++)
        {
            if(memory.Player[i].Name != alls[0] || memory.Player[i].Password != alls[1]) continue;
            t = true;
            na = `Your Name: ${alls[0]}`;
            na += `. Your Lvl: ${memory.Player[i].Lvl}`
            break;
        }
    }
    res.json({
        message:`${na}`,Answer: t
    });    
}