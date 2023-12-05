import "./ItemCarousel.scss";

const ItemCarousel = (props) => {
  const { name, price, imageUrl, isOrdered, orderCount } = props;

  return (
    <div className="carousel-item">
      <img src={imageUrl} alt={name} />
      <div className="div-with-p-and-strong">
        {" "}
        <p>{name}</p>
        <strong className="price">{price}</strong>
      </div>
      <div className="add-count-to-basket">
        <button type="button">-</button>
        <span>{isOrdered ? orderCount : 1}</span>
        <button type="button">+</button>
      </div>
    </div>
  );
};

export default ItemCarousel;
