const mongoose = require("mongoose");

const championSchema = new mongoose.Schema({
    userId: { type: String, required: true},
    role: {
      type: String,
      required: true
    },
    champion: {
      type: String,
      required: true
    },
    spells: [{
      title: String,
      notes: String,
      spells: [{
        name: String,
        image: String
      }]
    }],
    runes: [{
      title: String,
      notes: String,
      runes1: {
        name: String,
        rune1: Number,
        rune2: Number,
        rune3: Number,
        rune4: Number
      },
      runes2: {
        name: String,
        rune1: {
          index: Number,
          rune: Number
        },
        rune2: {
          index: Number,
          rune: Number
        }
      },
      runes3: {
        rune1: Number,
        rune2: Number,
        rune3: Number
      }
    }],
    items: [{
      title: String,
      items: [String]
    }],
    skills: [{
      title: String,
      skills: [String]
    }],
    matchups: [{
      matchup: String,
      difficulty: String,
      notes: String
    }]
  });

module.exports = mongoose.model("Champion", championSchema);