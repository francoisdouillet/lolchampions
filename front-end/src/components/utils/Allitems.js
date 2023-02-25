import { useState, useEffect } from "react";

export default function Allitems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      fetch(
        `https://ddragon.leagueoflegends.com/cdn/13.4.1/data/fr_FR/item.json`
      )
        .then((response) => {
          return response.json();
        })
        .then((response) => {
            const excludedItems = ["Œil du héraut", "Armure renforcée", "Prime de bâtiment", "Chronomètre brisé", "Lance noire de Kalista", "Effigie d'épouvantail", "Gangplank Placeholder"]; // Liste des noms d'items à exclure
            const itemArray = Object.keys(response.data).map(key => {
                const itemName = response.data[key].name;
                if (!excludedItems.includes(itemName)) { // Vérifie si l'item n'est pas dans la liste des exclusions
                  return {
                    name: itemName,
                    image: response.data[key].image.full
                  }
                } else {
                  return null; // Retourne null pour les items à exclure
                }
              }).filter(item => item !== null); // Filtre les items exclus de la liste
            setItems(itemArray);
        });
  }, []);

  return items;
}
