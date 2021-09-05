const rouletteCtrl = {}
const Roulette = require('../models/Roulette')
rouletteCtrl.getRoulettes = async(req,res) => {
    Roulette.find().populate('bets').then(datos=>{res.json(datos)})
}
rouletteCtrl.getRoulette = async(req,res) =>{
    Roulette.findById(req.params.id).populate('bets').then(datos=>{res.json(datos)})    
}
rouletteCtrl.createRoulettes = async (req,res) => {
    const newRoulette = new Roulette
    newRoulette.state = "created"
    await newRoulette.save()
    res.send({message: 'Ruleta creada: ' + newRoulette.id})
}
rouletteCtrl.deleteRoulette = async(req,res) => {
    await Roulette.findByIdAndDelete(req.params.id)
    res.json({status : 'Ruleta eliminada'})
}
rouletteCtrl.openRoulette = async (req,res) =>{
    const roulette = await Roulette.findById(req.params.id)
    roulette.state = "Open"
    roulette.save()
    res.send({message : 'Ruleta abierta'})
}
rouletteCtrl.assingbet = async (req,res) =>{
    const roulette = await Roulette.findById(req.params.id);
    if(roulette.state == "Open"){
        const { bet } = req.body;
        await roulette.bets.push(bet)
        roulette.save()
        res.json(roulette)
    }
    else{
        res.send({message:'Ruleta NO abierta'})
    }
    
}
rouletteCtrl.deletebet = async(req,res)=>{
    const roulette = await Roulette.findById(req.params.id);
    const { bet } = req.body;
    await roulette.bets.pull(bet)
    roulette.save()
    res.json(roulette)
}
rouletteCtrl.closeRoulette = async(req,res)=>{   
    const roulette = await Roulette.findById(req.params.id);
    roulette.state = "Close"
    roulette.save()
    res.send({message : 'Ruleta Cerrada'})    
}
module.exports = rouletteCtrl