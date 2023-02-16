import barrier from '../../images/spells/barrier.webp'
import clarity from '../../images/spells/clarity.webp'
import cleanse from '../../images/spells/cleanse.webp'
import exhaust from '../../images/spells/exhaust.webp'
import flash from '../../images/spells/flash.webp'
import ghost from '../../images/spells/ghost.webp'
import gustwalkersmite from '../../images/spells/gustwalker-smite.webp'
import heal from '../../images/spells/heal.webp'
import ignite from '../../images/spells/ignite.webp'
import mosstompersmite from '../../images/spells/mosstomper-smite.webp'
import scorchclawsmite from '../../images/spells/scorchclaw-smite.webp'
import smite from '../../images/spells/smite.webp'
import teleport from '../../images/spells/teleport.webp'


export default function Allspells() {
  const spells = [
    {
      name: 'Barrière',
      image : barrier
    },
    {
      name: 'Clarté',
      image : clarity
    },
    {
      name: 'Purge',
      image : cleanse
    },
    {
      name: 'Fatigue',
      image : exhaust
    },
    {
      name: 'Saut éclair',
      image : flash
    },
    {
      name: 'Fantôme',
      image : ghost
    },
    {
      name: 'Soins',
      image : heal
    },
    {
      name: 'Embrasement',
      image : ignite
    },
    {
      name: 'Téléportation',
      image : teleport
    },
    {
      name: 'Smite bleue',
      image : gustwalkersmite
    },
    {
      name: 'Smite vert',
      image : mosstompersmite
    },
    {
      name: 'Smite rouge',
      image : scorchclawsmite
    },
    {
      name: 'Smite',
      image : smite
    },
  ]

  return spells
}
