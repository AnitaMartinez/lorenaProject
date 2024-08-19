import "../scss/App.scss";
import { useState } from "react";
import ImageLayer from "./ImageLayer.jsx";
import Options from "./Options.jsx";

function App() {
  const [layer, setLayers] = useState({
    Background: "src/images/backgrounds/blue50.png",
    Neck: "src/images/neck/default.png",
    Hair: "src/images/hair/default.png",
    Ears: "src/images/ears/default.png",
    Eyes: "src/images/eyes/default.png",
    Nose: "src/images/nose.png",
    Mouth: "src/images/mouth/default.png",
    Leg: "src/images/leg/default.png",
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
      <section className="app__section">
        <div className="app__imagepreview">
          <ImageLayer src={layer.Background} />
          <ImageLayer src={layer.Neck} />
          <ImageLayer src={layer.Hair} />
          <ImageLayer src={layer.Ears} />
          <ImageLayer src={layer.Eyes} />
          <ImageLayer src={layer.Nose} />
          <ImageLayer src={layer.Mouth} />
          <ImageLayer src={layer.Leg} />
        </div>

        <div className="app__options">
          <Options
            layer="Background"
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
            layer={"Neck"}
            options={[
              "src/images/neck/default.png",
              "src/images/neck/bend-backward.png",
              "src/images/neck/bend-forward.png",
              "src/images/neck/thick.png",
            ]}
            current={layer.Neck}
            onLayerChange={handleLayerChange}
          />
          <Options
            layer="Hair"
            options={[
              "src/images/hair/default.png",
              "src/images/hair/bang.png",
              "src/images/hair/curls.png",
              "src/images/hair/elegant.png",
              "src/images/hair/fancy.png",
              "src/images/hair/quiff.png",
              "src/images/hair/short.png",
            ]}
            current={layer.Hair}
            onLayerChange={handleLayerChange}
          />

          <Options
            layer="Ears"
            options={[
              "src/images/Ears/default.png",
              "src/images/Ears/tilt-backward.png",
              "src/images/Ears/tilt-forward.png",
            ]}
            current={layer.ears}
            onLayerChange={handleLayerChange}
          />
          <Options
            layer="Eyes"
            options={[
              "src/images/Eyes/default.png",
              "src/images/Eyes/angry.png",
              "src/images/Eyes/naughty.png",
              "src/images/Eyes/panda.png",
              "src/images/Eyes/smart.png",
              "src/images/Eyes/star.png",
            ]}
            current={layer.Eyes}
            onLayerChange={handleLayerChange}
          />

          <Options
            layer="Mouth"
            options={[
              "src/images/mouth/default.png",
              "src/images/mouth/astonished.png",
              "src/images/mouth/eating.png",
              "src/images/mouth/laugh.png",
              "src/images/mouth/tongue.png",
            ]}
            current={layer.Mouth}
            onLayerChange={handleLayerChange}
          />
          <Options
            layer="Leg"
            options={[
              "src/images/leg/default.png",
              "src/images/leg/bubble-tea.png",
              "src/images/leg/cookie.png",
              "src/images/leg/game-console.png",
              "src/images/leg/tilt-backward.png",
              "src/images/leg/tilt-forward.png",
            ]}
            current={layer.Leg}
            onLayerChange={handleLayerChange}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
