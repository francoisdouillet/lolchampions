const Matchup = require('../models/Matchup')

exports.displayMatchup = (req, res, next) => {
    const data = req.body

    const matchup = new Matchup({
        ...data
    })

    matchup
        .save()
        .then(() => {
            res.status(201).json({ message: 'Matchup envoyé' })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
}

exports.getMatchups = (req, res, next) => {
    Matchup.find({ userId: req.params.id })
        .then((matchups) => {
            res.status(200).json(matchups)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })

}