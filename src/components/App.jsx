import "../scss/App.scss";
import { useState } from "react";
import ImageLayer from "./ImageLayer.jsx";

function App() {
  const [layer, setLayers] = useState({
    background: "src/images/backgrounds/blue50.png",
    neck: "src/images/neck/default.png",
    nose: "src/images/nose.png",
    mouth: "src/images/mouth/default.png",
    leg: "src/images/leg/default.png",
    hair: "src/images/hair/default.png",
    eyes: "src/images/eyes/default.png",
    ears: "src/images/ears/default.png",
  });

  return (
    <div>
      <h2 className="app__title">Alpaca Generator</h2>
      <div className="app__imagepreview">
        <ImageLayer src={layer.background} />
        <ImageLayer src={layer.neck} />
        <ImageLayer src={layer.nose} />
        <ImageLayer src={layer.mouth} />
        <ImageLayer src={layer.leg} />
        <ImageLayer src={layer.hair} />
        <ImageLayer src={layer.ears} />
        <ImageLayer src={layer.eyes} />
      </div>
    </div>
  );
}

export default App;
