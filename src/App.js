import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { CouponProvider } from "./context/CouponContext";
import { GlobalProvider } from "./context/GlobalContext";
import { Title } from "./styles";
import CouponView from "./components/coupons/CouponView";
import Home from "./components/Home";
import "./App.scss";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <CouponProvider>
          <Title>Boupon</Title>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/coupons">
              <CouponView />
            </Route>
          </Switch>
        </CouponProvider>
      </GlobalProvider>
    </Router>
  );
}

export default App;
