import "./App.css";
import { Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import Business from "./components/Business/Business";
import Products from "./components/Products/Products";
import Manufacturing from "./components/Manufacturing/Manufacturing";
import Research from "./components/R&D/Research";
import People from "./components/People/People";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/business-operations" component={Business} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/manufacturing" component={Manufacturing} />
        <Route exact path="/research & development" component={Research} />
        <Route exact path="/our people" component={People} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
