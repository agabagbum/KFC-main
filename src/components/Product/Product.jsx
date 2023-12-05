import "./Product.scss";
import ProductModal from "../ProductModal/ProductModal";
import { useState } from "react";

const Product = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { product, onProductSelect, orderedProducts, onLike, onProductLike } =
    props;

  const { name, price, description, imageUrl } = product;

  const isOrdered = orderedProducts.some(
    (orderedProduct) => orderedProduct.id === product.id
  );

  const orderCount = orderedProducts.filter(
    (orderedProduct) => orderedProduct.id === product.id
  ).length;

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleAddToBasket = (product, quantity) => {
    const orderedProduct = { ...product, quantity };
    onProductSelect(orderedProduct);
  };

  return (
    <article className="product" data-ordered={isOrdered}>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <header>
          <h4>{name}</h4>
          <p>{description}</p>
        </header>
        <section>
          <strong>{price}</strong>
          <button type="button" onClick={handleButtonClick}>
            {isOrdered ? orderCount : "+"}
          </button>
        </section>
      </div>
      {isModalOpen && (
        <ProductModal
          product={product}
          onClose={handleClose}
          onLike={onProductLike}
          onAddToBasket={handleAddToBasket}
        ></ProductModal>
      )}
    </article>
  );
};

export default Product;
