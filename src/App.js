import Coupons from "./components/Coupons";
import { CouponProvider } from "./context/CouponContext";
import { GlobalProvider } from "./context/GlobalContext";
import "./App.scss";
import { Title } from "./styles";

function App() {
  return (
    <GlobalProvider>
      <CouponProvider>
        <Title>Boupon</Title>
        <Coupons />
        <Coupons old />
      </CouponProvider>
    </GlobalProvider>
  );
}

export default App;
