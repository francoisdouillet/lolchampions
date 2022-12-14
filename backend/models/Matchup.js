const mongoose = require("mongoose");

const matchupSchema = mongoose.Schema({
    userId: { type: String, required: true},
    role: { type: String, required: true},
    myChamp: { type: String, required: true},
    hisChamp: {type: String, required: true},
    difficulty: {type: String, required: true},
    commentary: {type: String, required: false},
    win: {type: Boolean, required: true},
    winMatchup: {type: Boolean, required: true},
})

module.exports = mongoose.model("Matchup", matchupSchema);