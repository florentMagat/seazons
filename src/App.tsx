import './App.css';

import autumn from './assets/images/autumn2.jpg';
import winter from './assets/images/winter2.jpg';
import spring from './assets/images/spring2.jpg';
import summer from './assets/images/summer2.jpg';

function getCurrentSeason() {
  const now = new Date();
  const year = now.getFullYear();

  // Dates des équinoxes et solstices en 2025
  const equinoxSpring = new Date(Date.UTC(year, 2, 20, 10, 1));
  const solsticeSummer = new Date(Date.UTC(year, 5, 21, 4, 42)); 
  const equinoxAutumn = new Date(Date.UTC(year, 8, 22, 20, 19));
  const solsticeWinter = new Date(Date.UTC(year, 11, 21, 16, 3));

  // Déterminer la saison en comparant les dates
  if (now >= equinoxSpring && now < solsticeSummer) {
    return "spring";
  } else if (now >= solsticeSummer && now < equinoxAutumn) {
    return "summer";
  } else if (now >= equinoxAutumn && now < solsticeWinter) {
    return "autumn";
  } else {
    return "winter";
  }
};


function App() {

  let background;
  const season = getCurrentSeason();

  if (season === "winter") {
    background = <img src={winter} className="bg-blend-overlay" alt="bannière de présentation du site"/>
  } else if (season === "spring") {
    background = <img src={spring} alt="bannière de présentation du site"/>
  } else if (season === "summer") {
    background = <img src={summer} alt="bannière de présentation du site"/>
  } else {
    background = <img src={autumn} alt="bannière de présentation du site"/>
  }

  return (
    <div>
      <h1 className="text-4xl p-3 font-bold text-red-500">
        Seazons / barre de recherche 
      </h1>
      {background}
    </div>
  );
}

export default App;