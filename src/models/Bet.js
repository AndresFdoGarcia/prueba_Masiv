const { Schema, model} = require('mongoose')
const betSchema = new Schema({
    userid : { type : String , require : true},
    amount : { type : Number , require : true},
    chosen_number : { type : Number },
    chosen_color : { type : String }     
},{
    timestamps: true,
    versionKey: false
})
module.exports = model('Bet', betSchema )