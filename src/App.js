import Coupons from "./components/Coupons";
import { CouponProvider } from "./context/CouponContext";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <CouponProvider>
        <Coupons />
      </CouponProvider>
    </GlobalProvider>
  );
}

export default App;
