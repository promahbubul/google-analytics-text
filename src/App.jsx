import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen bg-slate-300">
      <div className="text-center font-medium text-xl bg-orange-950 text-white py-5 rounded-b-3xl">
        Welcome to Google Analitics
      </div>
      <h1 className="mt-52 text-center text-5xl font-extrabold text-green-950 underline">
        Best Website
      </h1>
    </div>
  );
}

export default App;
