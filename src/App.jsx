import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const App = () => {

  return (
    <BrowserRouter>
        <CartContext>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a Citrino Store, el mundo de los Cristales" />} />
          <Route exact path="/category/:categoryid" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        </CartContext>
        <Footer />
    </BrowserRouter>
  );
};
export default App;
