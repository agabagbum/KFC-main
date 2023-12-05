import "./ProductModal.scss";
import { FaArrowLeftLong, FaRegHeart, FaHeart } from "react-icons/fa6";
import Carouselle from "../Carouselle/Carouselle";
import { useState } from "react";

const ProductModal = (props) => {
  const {
    product,
    onClose,
    onLike,
    isOrdered,
    orderCount,
    handleButtonClick,
    orderedProducts,
    onAddToBasket,
  } = props;
  const { imageUrl, description, name, price } = product;

  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    onLike(product);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToBasket = () => {
    onAddToBasket(product, quantity);
    onClose();
  };

  const handleCloseButtonClick = () => {
    onClose();
  };

  return (
    <div className="product-modal">
      <div className="product-modal-inner">
        <button className="add-to-fav" onClick={handleLikeClick}>
          {isLiked ? <FaHeart /> : <FaRegHeart />}
        </button>
        <button className="close-btn" onClick={handleCloseButtonClick}>
          <FaArrowLeftLong />
        </button>
        <div className="product-modal-part">
          <div className="all-without-carousel">
            <div className="div-with-img">
              {" "}
              <img src={imageUrl} alt={name} />
            </div>
            <div className="div-with-ndp">
              {" "}
              <h4>{name}</h4>
              <p>{description}</p>
              <strong className="price">{price}</strong>
            </div>
          </div>
          <div className="carouselle-part">
            <p>DODAJ TO CO LUBISZ</p>
            <Carouselle
              imageUrl={imageUrl}
              name={name}
              price={price}
              onAddToBasket={handleAddToBasket}
            ></Carouselle>
          </div>
          <div className="add-to-basket-part">
            <div className="add-count-to-basket">
              <button
                type="button"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="add-to-basket-button">
              <button
                type="button"
                onClick={handleButtonClick}
                isOrdered={isOrdered}
                orderCount={orderCount}
                onClick={handleAddToBasket}
              >
                DODAJ DO KOSZYKA {price * quantity}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
