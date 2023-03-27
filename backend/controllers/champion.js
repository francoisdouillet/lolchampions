const Champion = require('../models/Champion')

exports.displayChampion = (req, res, next) => {
    const data = req.body

    const champion = new Champion({
        ...data
    })
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

exports.getOneChampion = (req, res, next) => {
    Champion.findOne({ _id: req.params.id })
        .then((champion) => {
            if (!champion) {
                return res.status(404).json({ message: "Champion not found" });
            }
            res.status(200).json(champion);
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};

exports.deleteChampion = (req, res, next) => {
    Champion.findOneAndDelete({ _id: req.params.id })
        .then((champion) => {
            if (!champion) {
                return res.status(404).json({ message: "Champion not found" });
            }
            res.status(200).json({ message: "Champion deleted successfully" });
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
}