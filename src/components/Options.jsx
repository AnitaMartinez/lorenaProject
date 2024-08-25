import "../scss/main/Options.scss";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function Options({
  layer,
  options,
  current,
  onLayerChange,
  isVisible,
  onLayerVisibility,
}) {
  return (
    <div className="layerselector">
      <div className="layerselector__divtitle" onClick={onLayerVisibility}>
        <h3 className="layerselector__title">{layer} </h3>
        <button className="button__x">
          {isVisible ? (
            <GoChevronUp size={15} className="icons" />
          ) : (
            <GoChevronDown size={15} className="icons" />
          )}
        </button>
      </div>
      {isVisible && (
        <div className="layerselector__options">
          {options.map((option) => {
            const fileName = option.split("/").pop().split(".")[0];
            return (
              <button
                key={option}
                className={`option-button ${
                  option === current ? "active" : ""
                }`}
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
