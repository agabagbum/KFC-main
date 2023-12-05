import { useState } from "react";
import "./App.css";
import products from "./mocks/products.json";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";

function App() {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  const handleProductSelect = (product) => {
    setOrderedProducts([...orderedProducts, product]);
  };

  const handleProductRemove = (orderedProduct) => {
    setOrderedProducts(
      orderedProducts.filter((product) => product.id !== orderedProduct.id)
    );
  };

  const handleProductLike = (product) => {
    setLikedProducts([...likedProducts, product]);
  };

  return (
    <>
      <Basket
        orderedProducts={orderedProducts}
        onProductRemove={handleProductRemove}
      ></Basket>
      <main>
        <header>
          <h1>Welcome!</h1>
        </header>
        <hr />
        <section>
          {products.map((product) => (
            <Product
              product={product}
              orderedProducts={orderedProducts}
              onProductSelect={handleProductSelect}
              onProductLike={handleProductLike}
            ></Product>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
