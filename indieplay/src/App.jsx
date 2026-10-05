import { useState } from "react";
import Header from "./Componentes/Header";
import Sidebar from "./Componentes/Sidebar";
import GameCard from "./Componentes/GameCard";
import GameModal from "./Componentes/GameModal";

import stardewImg from "./assets/StardewValley.jpg";
import celesteImg from "./assets/Celeste.jpg";
import hadesImg from "./assets/Hades.jpg";
import silksongImg from "./assets/Silksong.jpg";
import terrariaImg from "./assets/Terraria.jpg";
import isaacImg from "./assets/The binding of issac.jpg";

const games = [
  {
    title: "Hollow Knight: Silksong",
    studio: "Team Cherry",
    genre: "Metroidvania",
    image: silksongImg,
    description: "Juega como Hornet, la princesa protectora de Hallownest, y aventúrate a través de un reino completamente nuevo gobernado por la seda y la canción en esta esperadísima secuela.",
    action: "Ver Detalles",
    accent: "violet",
  },
  {
    title: "Celeste",
    studio: "Maddy Makes Games",
    genre: "Plataformas de Precisión",
    image: celesteImg,
    description: "Ayuda a Madeline a sobrevivir a sus demonios internos en su viaje a la cima de la montaña Celeste, en este ajustadísimo juego de plataformas dibujado a mano.",
    action: "Ver Detalles",
    accent: "green",
  },
  {
    title: "Stardew Valley",
    studio: "ConcernedApe",
    genre: "Simulación de Granjas",
    image: stardewImg,
    description: "Acabas de heredar la vieja granja de tu abuelo en Stardew Valley. Decide si quieres cultivar, criar animales, minar, pescar o interactuar con los habitantes del pueblo.",
    action: "Ver Detalles",
    accent: "violet",
  },
  {
    title: "Terraria",
    studio: "Re-Logic",
    genre: "Sandbox",
    image: terrariaImg,
    description: "¡Excava, lucha, explora, construye! Sumérgete en extensas cavernas, enfréntate a poderosos jefes y construye tu propia ciudad en esta clásica aventura 2D.",
    action: "Ver Detalles",
    accent: "green",
  },
  {
    title: "The Binding of Isaac",
    studio: "Edmund McMillen",
    genre: "Roguelike",
    image: isaacImg,
    description: "Acompaña a Isaac en su escape a través del sótano, enfrentándose a criaturas grotescas y descubriendo oscuros secretos en este impredecible roguelike.",
    action: "Ver Detalles",
    accent: "violet",
  },
  {
    title: "Hades",
    studio: "Supergiant Games",
    genre: "Roguelike de Acción",
    image: hadesImg,
    imagePosition: "center 58%",
    description: "Desafía al dios de los muertos mientras abres camino a tajos para salir del Inframundo en este galardonado juego de exploración de mazmorras.",
    action: "Ver Detalles",
    accent: "green",
  },
];

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="app-shell">
      <Header />
      <Sidebar />
      <main className="main-content">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span />SELECCIÓN INDIE</div>
            <h1>Juegos Destacados</h1>
            <p>Experiencias únicas, creadas por estudios independientes.</p>
          </div>
          <div className="collection-count">
            <strong>06</strong>
            <span>JOYAS<br />SELECCIONADAS</span>
          </div>
        </div>

        <section className="games-grid" aria-label="Juegos destacados">
          {games.map((game, index) => (
            <GameCard 
              game={game} 
              index={index} 
              key={game.title} 
              onClick={() => setSelectedGame(game)}
            />
          ))}
        </section>
      </main>

      {selectedGame && (
        <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
    </div>
  );
}