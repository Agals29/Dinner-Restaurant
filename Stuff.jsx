import React from "react";
// Import the CSS file
import Orders from "../../Orders";
function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="rot">
          <h1>Welcome to My Website</h1>
          <p>
            This is a simple design with a background color inside the content
            area.
          </p>
        </div>
        <Orders />
      </div>
    </div>
  );
}

export default App;
