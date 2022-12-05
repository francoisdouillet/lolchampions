
export default function Allchamp() {
    async function fetchChamps() {
      const requete = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/12.22.1/data/fr_FR/champion.json"
      );
      if (!requete.ok) {
        alert("Un problème est survenu");
      }
      let donnees = await requete.json();
      console.log(donnees);
      for (const property in donnees.data) {
        const champions = document.getElementById("champions");
        const image = document.createElement("img");
        image.src = `https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${donnees.data[property].image.full}`;
        image.setAttribute("id", `${donnees.data[property].id}`);
        champions.appendChild(image);
      }
    }
    fetchChamps();
  
    return <div id="champions" className="champions"></div>;
  }