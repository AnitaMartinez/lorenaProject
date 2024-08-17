import "../scss/App.scss";
import { useState } from "react";
import ImageLayer from "./ImageLayer.jsx";
import Options from "./Options.jsx";

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

  const handleLayerChange = (layer, option) => {
    setLayers((prevLayers) => ({
      ...prevLayers,
      [layer]: option,
    }));
  };

  return (
    <div>
      <h2 className="app__title">Alpaca Generator</h2>
      <section>
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

        <div>
          <Options
            layer="background"
            options={[
              "src/images/backgrounds/blue50.png",
              "src/images/backgrounds/blue60.png",
              "src/images/backgrounds/blue70.png",
              "src/images/backgrounds/darkblue30.png",
              "src/images/backgrounds/darkblue50.png",
              "src/images/backgrounds/darkblue70.png",
              "src/images/backgrounds/green50.png",
              "src/images/backgrounds/green60.png",
              "src/images/backgrounds/green70.png",
              "src/images/backgrounds/green80.png",
              "src/images/backgrounds/grey40.png",
              "src/images/backgrounds/grey70.png",
              "src/images/backgrounds/grey80.png",
              "src/images/backgrounds/red50.png",
              "src/images/backgrounds/red60.png",
              "src/images/backgrounds/red70.png",
              "src/images/backgrounds/yellow50.png",
              "src/images/backgrounds/yellow60.png",
            ]}
            current={layer.background}
            onLayerChange={handleLayerChange}
          />
          <Options
            layer="ears"
            options={[
              "src/images/ears/default.png",
              "src/images/ears/tilt-backward.png",
              "src/images/ears/tilt-forward.png",
            ]}
            current={layer.ears}
            onLayerChange={handleLayerChange}
          />
          <Options
            layer="eyes"
            options={[
              "src/images/eyes/default.png",
              "src/images/eyes/angry.png",
              "src/images/eyes/naughty.png",
              "src/images/eyes/panda.png",
              "src/images/eyes/smart.png",
              "src/images/eyes/star.png",
            ]}
            current={layer.eyes}
            onLayerChange={handleLayerChange}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
