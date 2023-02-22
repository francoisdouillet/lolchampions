import adaptative from '../../images/runes/sous-runes/adaptative.webp'
import armor from '../../images/runes/sous-runes/armor.webp'
import attackspeed from '../../images/runes/sous-runes/attackspeed.webp'
import habilityhaste from '../../images/runes/sous-runes/habilityhaste.webp'
import health from '../../images/runes/sous-runes/health.webp'
import magicresist from '../../images/runes/sous-runes/magicresist.webp'

export default function Allsousrunes () {
    const sousrunes = [
        {
            "name": 'Sous-Runes',
            "slots": [
                {
                    "runes": [
                        {
                            "name": 'Force adaptative',
                            "icon": adaptative
                        },
                        {
                            "name": 'Vitesse d\'attaque',
                            "icon": attackspeed
                        },
                        {
                            "name": 'Accèlération compétence',
                            "icon": habilityhaste
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Force adaptative',
                            "icon": adaptative
                        },
                        {
                            "name": 'Armure',
                            "icon": armor
                        },
                        {
                            "name": 'Résistance magique',
                            "icon": magicresist
                        },
                    ]
                },
                {
                    "runes": [
                        {
                            "name": 'Armure',
                            "icon": armor
                        },
                        {
                            "name": 'Résistance magique',
                            "icon": magicresist
                        },
                        {
                            "name": 'Vie',
                            "icon": health
                        },
                    ]
                },
            ]
            
        },
    ]
    return sousrunes
}