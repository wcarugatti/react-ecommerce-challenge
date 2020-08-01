import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppState from "./context/AppState";
import GlobalStyles from "./styles/GlobalStyles";
import Overview from "./components/Overview/Overview";
import Header from "./components/Header/Header";

function App() {
  return (
    <AppState>
      <Router>
        <Header />
        <Route exact path="/" component={Layout} />
        <Route exact path="/resumo" component={Overview} />
      </Router>
      <GlobalStyles />
    </AppState>
  );
}

export default App;
