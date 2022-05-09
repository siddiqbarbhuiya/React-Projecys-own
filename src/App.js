import { Route, BrowserRouter} from "react-router-dom";
import Header from "./Comp/Header";
import Home from "./Comp/Home";
import CartPage from "./Comp/CartPage";

export default function App() {


  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/cart">
        <CartPage  />
        </Route>
      </div>
    </BrowserRouter>
  );
}
