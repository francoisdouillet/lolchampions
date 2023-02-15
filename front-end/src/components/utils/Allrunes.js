import { useEffect, useState } from "react";

export default function Allrunes() {
    const [runes, setRunes] = useState([]);

    useEffect(() => {
        fetch(
            `https://ddragon.leagueoflegends.com/cdn/13.3.1/data/fr_FR/runesReforged.json`
        )
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                const itemArray = response.map((rune) => {
                    const slots = rune.slots.map((slot) => {
                        const runes = slot.runes.map((rune) => ({
                            name: rune.name,
                            icon: rune.icon,
                        }));
                        return { runes };
                    });
                    return {
                        id: rune.id,
                        key: rune.key,
                        icon: rune.icon,
                        name: rune.name,
                        slots,
                    };
                });
                setRunes(itemArray);
            });
    }, []);

    return runes
}
