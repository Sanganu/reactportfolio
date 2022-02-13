import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Landing from "./pages/Landing";
import Work from "./pages/Work";
import Connect from "./pages/Connect";
import Header from './components/Header';
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import aboutme from "./about.json";
// import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     {/* <Navigation /> */}
       <Header/>
         <Switch>
  <Route exact path="/" render={(aboutme)  =><Landing {...aboutme}/>} />
            {/* <Route exact path="/intro">{Intro}</Route> */}
            <Route exact path="/work">{Work}</Route>
            <Route exact path="/connect">{Connect}</Route>
            <Route exact path="/resume">{Resume}</Route>
          </Switch>
         <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
