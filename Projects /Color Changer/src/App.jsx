import { useState } from "react";

function App() {
  const [bgColor, setBGColor] = useState("bg-slate-950");
  const btnData = [
    {
      value: "red",
      label: "Red",
      bg: "bg-red-600",
      text: "text-white",
    },
    {
      value: "yellow",
      label: "Yellow",
      bg: "bg-yellow-600",
      text: "text-white",
    },
    {
      value: "black",
      label: "Black",
      bg: "bg-black",
      text: "text-white",
    },
    {
      value: "lavender",
      label: "Lavender",
      bg: "bg-purple-300",
      text: "text-black",
    },
    {
      value: "blue",
      label: "Blue",
      bg: "bg-blue-600",
      text: "text-white",
    },
    {
      value: "green",
      label: "Green",
      bg: "bg-green-600",
      text: "text-white",
    },
    {
      value: "orange",
      label: "Orange",
      bg: "bg-orange-600",
      text: "text-white",
    },
    {
      value: "teal",
      label: "Teal",
      bg: "bg-teal-600",
      text: "text-white",
    },
    {
      value: "white",
      label: "White",
      bg: "bg-white",
      text: "text-black",
    },
    {
      value: "pink",
      label: "Pink",
      bg: "bg-pink-600",
      text: "text-white",
    },
    {
      value: "gray",
      label: "Gray",
      bg: "bg-gray-600",
      text: "text-white",
    },
  ];

  return (
    <>
      <div className={`w-screen h-screen ${bgColor}`}>
        <div className="bg-white w-[80%] rounded-2xl py-2 px-4 fixed bottom-20 left-1/2 -translate-x-1/2 flex justify-between items-center">
          {(() => {
            return btnData.map((btn) => (
              <button
                onClick={() => setBGColor(btn.bg)}
                key={btn.value}
                value={btn.value}
                className={`${btn.bg} w-20 py-2 rounded-lg ${btn.text} shadow-lg hover:scale-[1.02]`}
              >
                {btn.label}
              </button>
            ));
          })()}
        </div>
      </div>
    </>
  );
}

export default App;
