import React from "react";
import "./App.css";
import CardJogo from "./Components/CardJogos/CardJogos";
import gow from "./assets/imgs/gow.jpg";
import rea from "./assets/imgs/images.jpg";
import souls from "./assets/imgs/souls.jpg";
import sub from "./assets/imgs/jjba.jpg";

function App() {
  return (
    <div className="container">
      <CardJogo
        id="jogo-1"
        capa={gow}
        titulo="God of War: 2018 Edition"
        genero="Ação / Aventura"
        preco={89.9}
        precoOriginal={149.9}
        onSale={true}
      />

      <CardJogo
        id="jogo-2"
        capa={rea}
        titulo="Reanimal"
        genero="Indie"
        preco={0}
        onSale={false}
      />

      <CardJogo
        id="jogo-3"
        capa={sub}
        titulo="JoJo's Bizarre Adventure: Eyes Of Heaven"
        genero="Ação, Luta"
        preco={199.9}
        onSale={false}
      />

      <CardJogo
        id="jogo-34"
        capa={souls}
        titulo="Dark Souls III"
        genero="RPG, Ação, Aventura"
        preco={199.9}
        onSale={false}
      />
    </div>
  );
}

export default App;
