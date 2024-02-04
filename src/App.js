import Header from "./containers/Header.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListing from "./containers/ProductLising.jsx";
import ProductDetails from "./containers/ProductDetail.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>Not found !</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
