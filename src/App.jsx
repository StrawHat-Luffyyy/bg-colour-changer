import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#FF6F61");
  const [active, setActive] = useState("#FF6F61");

  const handleColorChange = (newColor) => {
    setColor(newColor);
    setActive("");
    setTimeout(() => setActive(newColor), 0);
  };

  const buttonBase =
    "outline-none px-4 py-1 rounded-full shadow-lg transition-all duration-300 text-white";

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundColor: color,
        transition: "background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white/30 backdrop-blur-md px-3 py-2 rounded-3xl">
          {/* Coral */}
          <button
            onClick={() => handleColorChange("#FF6F61")}
            className={`${buttonBase} ${
              active === "#FF6F61"
                ? "ring-4 ring-white/70 scale-105 press-bounce"
                : ""
            }`}
            style={{ backgroundColor: "#FF6F61" }}
          >
            Coral
          </button>

          {/* Sage */}
          <button
            onClick={() => handleColorChange("#CAD2C5")}
            className={`outline-none px-4 py-1 rounded-full text-black shadow-lg transition-all duration-300 ${
              active === "#CAD2C5"
                ? "ring-4 ring-white/70 scale-105 press-bounce"
                : ""
            }`}
            style={{ backgroundColor: "#CAD2C5" }}
          >
            Sage
          </button>

          {/* Charcoal */}
          <button
            onClick={() => handleColorChange("#2C3E50")}
            className={`${buttonBase} ${
              active === "#2C3E50"
                ? "ring-4 ring-white/70 scale-105 press-bounce"
                : ""
            }`}
            style={{ backgroundColor: "#2C3E50" }}
          >
            Charcoal
          </button>

          {/* Lavender */}
          <button
            onClick={() => handleColorChange("#B57EDC")}
            className={`${buttonBase} ${
              active === "#B57EDC"
                ? "ring-4 ring-white/70 scale-105 press-bounce"
                : ""
            }`}
            style={{ backgroundColor: "#B57EDC" }}
          >
            Lavender
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
