import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NftListing from "./containers/NftListing";
import Header from "./containers/Header";
import "./App.css";
import NftDetails from "./containers/NftDetails";
// import NftForm from "./containers/NftForm"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <NftForm/> */}
        <Switch>
          {/* <Route path="/" exact component={NftForm} /> */}
          <Route path="/" exact component={NftListing} />
          <Route path="/nft/:nftId" component={NftDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
