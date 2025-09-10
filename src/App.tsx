import { useState } from "react";
import "./styles.css";

export default function App() {
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);

  const [leftLabels, setLeftLabels] = useState(["Concrete", "Past", "Individual"]);
  const [rightLabels, setRightLabels] = useState(["Abstract", "Future", "Collective"]);

  const hex = `#${[r, g, b].map(v => v.toString(16).padStart(2, "0")).join("")}`;

  const resetAll = () => {
    setR(128); setG(128); setB(128);
    setLeftLabels(["Concrete","Past","Individual"]);
    setRightLabels(["Abstract","Future","Collective"]);
  };

  const promptObj = {
    blend: [
      { axis: "R", left: leftLabels[0], right: rightLabels[0], weight: +(r/255).toFixed(2) },
      { axis: "G", left: leftLabels[1], right: rightLabels[1], weight: +(g/255).toFixed(2) },
      { axis: "B", left: leftLabels[2], right: rightLabels[2], weight: +(b/255).toFixed(2) },
    ],
    color: hex,
  };

  const copyJSON = async () => {
    await navigator.clipboard.writeText(JSON.stringify(promptObj, null, 2));
    alert("Prompt JSON copied to clipboard");
  };

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__title">RGB-LLM Prompt Mapper</h1>

        <div className="swatch">
          <div className="swatch__chip" style={{ background: hex }}></div>
          <code>{hex} → rgb({r}, {g}, {b})</code>
        </div>

        {(["R","G","B"] as const).map((ch, i) => {
          const val = i===0 ? r : i===1 ? g : b;
          const setVal = i===0 ? setR : i===1 ? setG : setB;

          return (
            <div key={ch} className="row">
              <div className="row__grid">
                <input
                  type="text"
                  value={leftLabels[i]}
                  onChange={e => { const x = [...leftLabels]; x[i] = e.target.value; setLeftLabels(x); }}
                  placeholder="Anything"
                  className="input"
                />

                <div className="slider">
                  <input
                    type="range"
                    min={0}
                    max={255}
                    value={val}
                    onChange={e => setVal(Number(e.target.value))}
                    className="slider__input"
                  />
                  <div className="slider__label">{ch}: {val}</div>
                </div>

                <input
                  type="text"
                  value={rightLabels[i]}
                  onChange={e => { const x = [...rightLabels]; x[i] = e.target.value; setRightLabels(x); }}
                  placeholder="Anything"
                  className="input"
                />
              </div>
            </div>
          );
        })}

        <div className="actions">
          <button onClick={copyJSON} className="btn">Copy JSON</button>
          <button onClick={resetAll} className="btn">Reset</button>
        </div>

        <h2 className="section-title">Prompt JSON</h2>
        <pre className="code-block">{JSON.stringify(promptObj, null, 2)}</pre>
      </div>
    </div>
  );
}
