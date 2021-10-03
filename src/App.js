import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Landing from "./pages/Landing";
import Work from "./pages/Work";
import Connect from "./pages/Connect";
import Header from './components/Header';
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Header/>
         <Switch>
            <Route exact path="/">{Landing}</Route>
            {/* <Route exact path="/intro">{Intro}</Route> */}
            <Route exact path="/work">{Work}</Route>
            <Route exact path="/connect">{Connect}</Route>
          </Switch>
         <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
