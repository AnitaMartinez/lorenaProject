import "../scss/main/Options.scss";
import { useState } from "react";

function Options({ layer, options, current, onLayerChange }) {
  const [isVisible, setIsVisible] = useState(true);

  const onClickDisplay = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="layerselector">
      <h3 className="layerselector__title">
        {layer}{" "}
        <button className="button__x" onClick={onClickDisplay}>
          {!isVisible ? "^" : "v"}
        </button>
      </h3>
      {!isVisible && (
        <div className="layerselector__options">
          {options.map((option) => {
            const fileName = option.split("/").pop().split(".")[0];
            return (
              <button
                key={option}
                className={option === current ? "active" : ""}
                onClick={() => onLayerChange(layer, option)}
              >
                {fileName}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Options;
