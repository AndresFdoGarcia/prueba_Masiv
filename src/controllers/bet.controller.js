const betCtrl = {}
const Bet = require('../models/Bet')


betCtrl.createBet = async(req,res) =>{    
    const newbet = new Bet(req.body)
    newbet.userid = req.headers.user
    let x = newbet.chosen_number    
        if(newbet.amount<=10000){
            if((x<=36 && x>=0) && newbet.chosen_color == ""){
                if(oddOreven(x)=="par"){
                    newbet.chosen_color = "Rojo"
                }
                else{
                    newbet.chosen_color = "Negro"
                }        
                await newbet.save()    
                res.send({message : "Apuesta válida"}) 
            }
            else{
                res.send({message : "Apuesta NO válida : no se acepta ese número"})
            } 
            
        }
        else{
            res.send({message : "Apuesta NO válida : execede valor apostado máximo"})
        }   
}
betCtrl.getBets = async(req,res) =>{
    const bets = await Bet.find()
    res.json(bets)
}
betCtrl.getBet = async(req,res) =>{
    const bet = await Bet.findById(req.params.id)
    res.json(bet)
}
betCtrl.deleteBet = async(req,res) =>{
    await Bet.findByIdAndDelete(req.params.id)
    res.send({message : "Apuesta eliminada"})
}
function oddOreven(num){
    if(num%2==0){
        return "par"
    }
    else return "impar"
}
module.exports = betCtrl