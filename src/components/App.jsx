import "../scss/App.scss";
import { useState, useRef } from "react";
import ImageLayer from "./ImageLayer.jsx";
import Options from "./Options.jsx";
import { toPng } from "html-to-image";

//importación imágenes- Backgrounds
import Blue50 from "../images/backgrounds/blue50.png";
import Blue60 from "../images/backgrounds/blue60.png";
import Blue70 from "../images/backgrounds/blue70.png";
import DarkBlue30 from "../images/backgrounds/darkblue30.png";
import DarkBlue50 from "../images/backgrounds/darkblue50.png";
import DarkBlue70 from "../images/backgrounds/darkblue70.png";
import Green50 from "../images/backgrounds/green50.png";
import Green60 from "../images/backgrounds/green60.png";
import Green70 from "../images/backgrounds/green70.png";
import Grey40 from "../images/backgrounds/grey40.png";
import Grey70 from "../images/backgrounds/grey70.png";
import Grey80 from "../images/backgrounds/grey80.png";
import Red50 from "../images/backgrounds/red50.png";
import Red60 from "../images/backgrounds/red60.png";
import Red70 from "../images/backgrounds/red70.png";
import Yellow50 from "../images/backgrounds/yellow50.png";
import Yellow60 from "../images/backgrounds/yellow60.png";

//Importación imágenes- Neck
import Default from "../images/neck/default.png";
import Bend_Backwards from "../images/neck/bend-backward.png";
import Bend_Forward from "../images/neck/bend-forward.png";
import Thick from "../images/neck/thick.png";

//Importación imágenes- Hair
import Normal from "../images/hair/default.png";
import Bang from "../images/hair/bang.png";
import Curls from "../images/hair/curls.png";
import Elegant from "../images/hair/elegant.png";
import Fancy from "../images/hair/fancy.png";
import Short from "../images/hair/short.png";

//Importación imágenes- Ears
import Ears from "../images/ears/default.png";
import Tilt_Backward from "../images/ears/tilt-backward.png";
import Tilt_Forward from "../images/ears/tilt-forward.png";

//Importación imágenes- Eyes
import Eyes from "../images/eyes/default.png";
import Angry from "../images/eyes/angry.png";
import Naughty from "../images/eyes/naughty.png";
import Panda from "../images/eyes/panda.png";
import Smart from "../images/eyes/smart.png";
import Star from "../images/eyes/star.png";

//Importación imágenes- Mouth
import Mouth from "../images/mouth/default.png";
import Astonished from "../images/mouth/astonished.png";
import Eating from "../images/mouth/eating.png";
import Laugh from "../images/mouth/laugh.png";
import Tongue from "../images/mouth/tongue.png";

//Importación imágenes - Leg
import Leg from "../images/leg/default.png";
import Bubble_Tea from "../images/leg/bubble-tea.png";
import Cookie from "../images/leg/cookie.png";
import Game_Console from "../images/leg/game-console.png";
import Tilt_Backwards from "../images/leg/tilt-backward.png";
import Tilt_Forwards from "../images/leg/tilt-forward.png";

function App() {
  const [layer, setLayers] = useState({
    Background: Blue50,
    Neck: Default,
    Hair: Normal,
    Ears: Ears,
    Eyes: Eyes,
    Nose: "src/images/nose.png",
    Mouth: "src/images/mouth/default.png",
    Leg: "src/images/leg/default.png",
  });

  const [visibleLayer, setVisibleLayer] = useState(null);
  const imageContainerRef = useRef(null);

  const handleLayerChange = (layer, option) => {
    setLayers((prevLayers) => ({
      ...prevLayers,
      [layer]: option,
    }));
  };

  const handleLayerVisibility = (layer) => {
    setVisibleLayer((prevLayer) => (prevLayer === layer ? null : layer));
  };

  const handleSaveImage = () => {
    if (imageContainerRef.current === null) {
      return;
    }

    toPng(imageContainerRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "generated-image.png";
        link.click();
      })
      .catch((err) => {
        console.error("Error capturing image:", err);
      });
  };

  return (
    <div>
      <h2 className="app__title">Alpaca Generator</h2>
      <div className="app__section">
        <section className="app__section1">
          <div className="app__imagebox">
            <div className="app__imagepreview" ref={imageContainerRef}>
              <ImageLayer src={layer.Background} />
              <ImageLayer src={layer.Neck} />
              <ImageLayer src={layer.Hair} />
              <ImageLayer src={layer.Ears} />
              <ImageLayer src={layer.Eyes} />
              <ImageLayer src={layer.Nose} />
              <ImageLayer src={layer.Mouth} />
              <ImageLayer src={layer.Leg} />
            </div>
          </div>
          <div className="app__savediv">
            <button className="button__save" onClick={handleSaveImage}>
              Save Image
            </button>
          </div>
        </section>
        <section className="app__options">
          <div>
            <Options
              layer="Background"
              options={[
                Blue50,
                Blue60,
                Blue70,
                DarkBlue30,
                DarkBlue50,
                DarkBlue70,
                Green50,
                Green60,
                Green70,
                Grey40,
                Grey70,
                Grey80,
                Red50,
                Red60,
                Red70,
                Yellow50,
                Yellow60,
              ]}
              current={layer.Background}
              onLayerChange={handleLayerChange}
              isVisible={visibleLayer === "Background"}
              onLayerVisibility={() => handleLayerVisibility("Background")}
            />

            <Options
              layer="Neck"
              options={[Default, Bend_Backwards, Bend_Forward, Thick]}
              current={layer.Neck}
              onLayerChange={handleLayerChange}
              isVisible={visibleLayer === "Neck"}
              onLayerVisibility={() => handleLayerVisibility("Neck")}
            />

            <Options
              layer="Hair"
              options={[Normal, Bang, Curls, Elegant, Fancy, Short]}
              current={layer.Hair}
              onLayerChange={handleLayerChange}
              isVisible={visibleLayer === "Hair"}
              onLayerVisibility={() => handleLayerVisibility("Hair")}
            />

            <Options
              layer="Ears"
              options={[Ears, Tilt_Backward, Tilt_Forward]}
              current={layer.Ears}
              onLayerChange={handleLayerChange}
              isVisible={visibleLayer === "Ears"}
              onLayerVisibility={() => handleLayerVisibility("Ears")}
            />

            <Options
              layer="Eyes"
              options={[Eyes, Angry, Naughty, Panda, Smart, Star]}
              current={layer.Eyes}
              onLayerChange={handleLayerChange}
              isVisible={visibleLayer === "Eyes"}
              onLayerVisibility={() => handleLayerVisibility("Eyes")}
            />

            <Options
              layer="Mouth"
              options={[Mouth, Astonished, Eating, Laugh, Tongue]}
              current={layer.Mouth}
              onLayerChange={handleLayerChange}
              isVisible={visibleLayer === "Mouth"}
              onLayerVisibility={() => handleLayerVisibility("Mouth")}
            />

            <Options
              layer="Leg"
              options={[
                Leg,
                Bubble_Tea,
                Cookie,
                Game_Console,
                Tilt_Backwards,
                Tilt_Forwards,
              ]}
              current={layer.Leg}
              onLayerChange={handleLayerChange}
              isVisible={visibleLayer === "Leg"}
              onLayerVisibility={() => handleLayerVisibility("Leg")}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
