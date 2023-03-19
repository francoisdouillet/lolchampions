const Champion = require('../models/Champion')

exports.displayChampion = (req, res, next) => {
    const data = req.body

    const champion = new Champion({
        ...data
    })

    console.log(champion)

    champion
        .save()
        .then(() => {
            res.status(201).json({ message: 'Fiche envoyé' })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
}

exports.getChampions = (req, res, next) => {
    Champion.find({ userId: req.params.id })
        .then((champions) => {
            res.status(200).json(champions)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })

}