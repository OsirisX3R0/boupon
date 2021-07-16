import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { CouponProvider } from "./context/CouponContext";
import { GlobalProvider } from "./context/GlobalContext";
import CouponView from "./components/coupons/CouponView";
import Home from "./components/home/Home";
import "./App.scss";
import Header from "./components/core/header/Header";
import FooterNav from "./components/core/footer/FooterNav";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <CouponProvider>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/coupons">
              <CouponView />
            </Route>
          </Switch>
          <FooterNav />
        </CouponProvider>
      </GlobalProvider>
    </Router>
  );
}

export default App;
