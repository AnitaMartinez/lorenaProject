import "../scss/main/Options.scss";

function Options({ layer, options, current, onLayerChange }) {
  return (
    <div className="layerselector">
      <h3>{layer}</h3>
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
    </div>
  );
}

export default Options;
