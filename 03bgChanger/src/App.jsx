import { useState } from "react";
function App() {
  const [color, setColor] = useState("white");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-400 px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("Olive")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("#A06AB4")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#A06AB4" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setColor("Pink")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("#07BB9C")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#07BB9C" }}
          >
            Blue Green
          </button>

          <button
            onClick={() => setColor("#BBE7FE")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-slate-500"
            style={{ backgroundColor: "#BBE7FE" }}
          >
            Baby Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
