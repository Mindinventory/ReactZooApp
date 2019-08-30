import React from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/details/:itemId" component={Details} />
    </div>
  );
}

export default App;
