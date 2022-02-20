import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="bg-red-500">
        <p className="bg-red-500 text-2xl">Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <Link to="/reader">Reader</Link>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
