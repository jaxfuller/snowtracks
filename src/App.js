import React from "react";
const api = {
  key: "6b58cd06a3a4bf2869202bf00fb23e60",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
        <main>
          <div className= "search-box">
            <input 
            type= "text"
            className="search-bar"
            placeholder="Search for a location...">
            </input>
          </div>
        </main>
    </div>
  );
}

export default App;
