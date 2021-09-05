const { Schema, model} = require('mongoose')
const schema = new Schema({
    state :{ type : String , require : true},
    bets : [{ type : Schema.Types.ObjectId , ref: "Bet"}]
},{
    timestamps: true,
    versionKey: false
});
module.exports = model('Roulette', schema)
