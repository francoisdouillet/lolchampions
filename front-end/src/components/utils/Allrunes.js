// import { useEffect, useState } from "react";
import domination from "../../images/runes/domination.webp"
import inspiration from "../../images/runes/inspiration.webp"
import precision from "../../images/runes/precision.webp"
import resolve from "../../images/runes/resolve.webp"
import sorcery from "../../images/runes/sorcery.webp"

//DOMINATION
import electrocute from "../../images/runes/domination/electrocute.webp"
import predator from "../../images/runes/domination/predator.webp"
import darkharvest from "../../images/runes/domination/dark-harvest.webp"
import hailofblades from "../../images/runes/domination/hail-of-blades.webp"
    // 1 DOMINATION
    import cheapshot from "../../images/runes/domination/cheap-shot.webp"
    import tasteofblood from "../../images/runes/domination/taste-of-blood.webp"
    import suddenimpact from "../../images/runes/domination/sudden-impact.webp"
    // 2 DOMINATION
    import zombieward from "../../images/runes/domination/zombie-ward.webp"
    import ghostporo from "../../images/runes/domination/ghost-poro.webp"
    import eyeballcollection from "../../images/runes/domination/eyeball-collection.webp"
    // 3 DOMINATION
    import treasurehunter from "../../images/runes/domination/treasure-hunter.webp"
    import ingenioushunter from "../../images/runes/domination/ingenious-hunter.webp"
    import relentlesshunter from "../../images/runes/domination/relentless-hunter.webp"
    import ultimatehunter from "../../images/runes/domination/ultimate-hunter.png"

//INSPIRATION
import glacialaugment from "../../images/runes/inspiration/glacial-augment.webp"
import unsealedspellbook from "../../images/runes/inspiration/unsealed-spellbook.webp"
import firststrike from "../../images/runes/inspiration/first-strike.png"
    // 1 INSPIRATION
    import hextechflashtraption from "../../images/runes/inspiration/hextech-flashtraption.webp"
    import magicalfootwear from "../../images/runes/inspiration/magical-footwear.webp"
    import perfecttiming from "../../images/runes/inspiration/perfect-timing.webp"
    // 2 INSPIRATION
    import futuresmarket from "../../images/runes/inspiration/futures-market.webp"
    import miniondematerializer from "../../images/runes/inspiration/minion-dematerializer.webp"
    import biscuitdelivery from "../../images/runes/inspiration/biscuit-delivery.webp"
    // 3 INSPIRATION
    import cosmicinsight from "../../images/runes/inspiration/cosmic-insight.webp"
    import approachvelocity from "../../images/runes/inspiration/approach-velocity.webp"
    import timewarptonic from "../../images/runes/inspiration/time-warp-tonic.webp"

//PRECISION
import presstheattack from "../../images/runes/precision/press-the-attack.webp"
import lethaltempo from "../../images/runes/precision/lethal-tempo.webp"
import fleetfootwork from "../../images/runes/precision/fleet-footwork.webp"
import conqueror from "../../images/runes/precision/conqueror.png"
    // 1 PRECISION
    import overheal from "../../images/runes/precision/overheal.webp"
    import triumph from "../../images/runes/precision/triumph.webp"
    import presenceofmind from "../../images/runes/precision/presence-of-mind.webp"
    // 2 PRECISION
    import legendalacrity from "../../images/runes/precision/legend-alacrity.webp"
    import legendtenacity from "../../images/runes/precision/legend-tenacity.webp"
    import legendbloodline from "../../images/runes/precision/legend-bloodline.webp"
    // 3 PRECISION
    import coupdegrace from "../../images/runes/precision/coup-de-grace.webp"
    import cutdown from "../../images/runes/precision/cut-down.webp"
    import laststand from "../../images/runes/precision/last-stand.webp"

//RESOLVE
import graspoftheundying from "../../images/runes/resolve/grasp-of-the-undying.webp"
import aftershock from "../../images/runes/resolve/aftershock.webp"
import guardian from "../../images/runes/resolve/guardian.webp"
    // 1 RESOLVE
    import demolish from "../../images/runes/resolve/demolish.webp"
    import frontoflife from "../../images/runes/resolve/font-of-life.webp"
    import shieldbash from "../../images/runes/resolve/shield-bash.webp"
    // 2 RESOLVE
    import conditioning from "../../images/runes/resolve/conditioning.webp"
    import secondwind from "../../images/runes/resolve/second-wind.webp"
    import boneplating from "../../images/runes/resolve/bone-plating.webp"
    // 3 RESOLVE
    import overgrowth from "../../images/runes/resolve/overgrowth.webp"
    import revitalize from "../../images/runes/resolve/revitalize.webp"
    import unflinching from "../../images/runes/resolve/unflinching.webp"

//SORCERY
import summonaery from "../../images/runes/sorcery/summon-aery.webp"
import arcanecomet from "../../images/runes/sorcery/arcane-comet.webp"
import phaserush from "../../images/runes/sorcery/phase-rush.webp"
    // 1 SORCERY
    import nullifyingorb from "../../images/runes/sorcery/nullifying-orb.webp"
    import manaflowband from "../../images/runes/sorcery/manaflow-band.webp"
    import nimbuscloak from "../../images/runes/sorcery/nimbus-cloak.png"
    // 2 SORCERY
    import transcendence from "../../images/runes/sorcery/transcendence.webp"
    import celerity from "../../images/runes/sorcery/celerity.webp"
    import absolutefocus from "../../images/runes/sorcery/absolute-focus.webp"
    // 3 SORCERY
    import scorch from "../../images/runes/sorcery/scorch.webp"
    import waterwalking from "../../images/runes/sorcery/waterwalking.webp"
    import gatheringstorm from "../../images/runes/sorcery/gathering-storm.webp"

//import cheapshot from "../../images/runes/domination/cheapshot.webp"

export default function Allrunes() {

    const runes = [
        {
            "name": 'Domination',
            "icon": domination,
            "slots": [
                {
                    "runes": [
                        {
                            "name": 'Electrocution',
                            "icon": electrocute
                        },
                        {
                            "name": 'Prédateur',
                            "icon": predator
                        },
                        {
                            "name": 'Moisson noire',
                            "icon": darkharvest
                        },
                        {
                            "name": 'Déluge de lames',
                            "icon": hailofblades
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Coup bas',
                            "icon": cheapshot
                        },
                        {
                            "name": 'Goût du sang',
                            "icon": tasteofblood
                        },
                        {
                            "name": 'Ruée offensive',
                            "icon": suddenimpact
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Balise zombie',
                            "icon": zombieward
                        },
                        {
                            "name": 'Poro fantôme',
                            "icon": ghostporo
                        },
                        {
                            "name": 'Arracher d\'oeil',
                            "icon": eyeballcollection
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Chasseur de trésors',
                            "icon": treasurehunter
                        },
                        {
                            "name": 'Chasseur ingénieux',
                            "icon": ingenioushunter
                        },
                        {
                            "name": 'Chasseur acharné',
                            "icon": relentlesshunter
                        },
                        {
                            "name": 'Chasseur ultime',
                            "icon": ultimatehunter
                        },
                    ]
                },
            ]
            
        },
        {
            "name": 'Inspiration',
            "icon": inspiration,
            "slots": [
                {
                    "runes": [
                        {
                            "name": 'Optimisation glacial',
                            "icon": glacialaugment
                        },
                        {
                            "name": 'Grimoire décahîné',
                            "icon": unsealedspellbook
                        },
                        {
                            "name": 'Premier coup',
                            "icon": firststrike
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Canaliportation Hextech',
                            "icon": hextechflashtraption
                        },
                        {
                            "name": 'Chaussures magiques',
                            "icon": magicalfootwear
                        },
                        {
                            "name": 'Timing parfait',
                            "icon": perfecttiming
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Marché du futur',
                            "icon": futuresmarket
                        },
                        {
                            "name": 'Désintégrateur de sbires',
                            "icon": miniondematerializer
                        },
                        {
                            "name": 'Livraison de biscuits',
                            "icon": biscuitdelivery
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Savoir cosmique',
                            "icon": cosmicinsight
                        },
                        {
                            "name": 'Vitesse d\'approche',
                            "icon": approachvelocity
                        },
                        {
                            "name": 'Philtre de chronodistorsion',
                            "icon": timewarptonic
                        },
                    ]
                },
            ]
            
        },
        {
            "name": 'Précision',
            "icon": precision,
            "slots": [
                {
                    "runes": [
                        {
                            "name": 'Attaque soutenue',
                            "icon": presstheattack
                        },
                        {
                            "name": 'Tempo mortel',
                            "icon": lethaltempo
                        },
                        {
                            "name": 'Jeu de jambes',
                            "icon": fleetfootwork
                        },
                        {
                            "name": 'Conquérant',
                            "icon": conqueror
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Surcharge de PV',
                            "icon": overheal
                        },
                        {
                            "name": 'Triomphe',
                            "icon": triumph
                        },
                        {
                            "name": 'Présence d\'esprit',
                            "icon": presenceofmind
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Légende : alacrité',
                            "icon": legendalacrity
                        },
                        {
                            "name": 'Légende : ténacité',
                            "icon": legendtenacity
                        },
                        {
                            "name": 'Légende : sangsue',
                            "icon": legendbloodline
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Coup de grâce',
                            "icon": coupdegrace
                        },
                        {
                            "name": 'Abattage',
                            "icon": cutdown
                        },
                        {
                            "name": 'Baroud d\'honneur',
                            "icon": laststand
                        },
                    ]
                },
            ]
            
        },
        {
            "name": 'Volonté',
            "icon": resolve,
            "slots": [
                {
                    "runes": [
                        {
                            "name": 'Poigne de l\'immortel',
                            "icon": graspoftheundying
                        },
                        {
                            "name": 'Après-coup',
                            "icon": aftershock
                        },
                        {
                            "name": 'Gardien',
                            "icon": guardian
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Démolition',
                            "icon": demolish
                        },
                        {
                            "name": 'Fontaine de vie',
                            "icon": frontoflife
                        },
                        {
                            "name": 'Coup de bouclier',
                            "icon": shieldbash
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Conditionnement',
                            "icon": conditioning
                        },
                        {
                            "name": 'Second souffle',
                            "icon": secondwind
                        },
                        {
                            "name": 'Plaque d\'os',
                            "icon": boneplating
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Surcroissance',
                            "icon": overgrowth
                        },
                        {
                            "name": 'Revitalisation',
                            "icon": revitalize
                        },
                        {
                            "name": 'Inébranlable',
                            "icon": unflinching
                        },
                    ]
                },
            ]
            
        },
        {
            "name": 'Sorcellerie',
            "icon": sorcery,
            "slots": [
                {
                    "runes": [
                        {
                            "name": 'Invocation d\'Aery',
                            "icon": summonaery
                        },
                        {
                            "name": 'Comète arcanique',
                            "icon": arcanecomet
                        },
                        {
                            "name": 'Rush phasique',
                            "icon": phaserush
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Orbe anti-magie',
                            "icon": nullifyingorb
                        },
                        {
                            "name": 'Ruban de mana',
                            "icon": manaflowband
                        },
                        {
                            "name": 'Manteau nuageux',
                            "icon": nimbuscloak
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Transcendance',
                            "icon": transcendence
                        },
                        {
                            "name": 'Célérité',
                            "icon": celerity
                        },
                        {
                            "name": 'Concentration absolue',
                            "icon": absolutefocus
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Brûlure',
                            "icon": scorch
                        },
                        {
                            "name": 'Marche sur l\'eau',
                            "icon": waterwalking
                        },
                        {
                            "name": 'Tempête menaçante',
                            "icon": gatheringstorm
                        },
                    ]
                },
            ]
            
        },
    ]

    return runes
}
