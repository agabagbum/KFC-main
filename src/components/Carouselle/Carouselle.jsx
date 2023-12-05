import Carousel from "react-elastic-carousel";
import "./Carouselle.scss";
import ItemCarousel from "../ItemCarousel/ItemCarousel";
import React, { useState, useEffect } from "react";
import productsData from "/src/mocks/products.json";

const Carouselle = (props) => {
  const { imageUrl, name, price, isOrdered, orderCount } = props;

  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * (productsData.length - 3));
    const selectedProducts = productsData.slice(randomIndex, randomIndex + 5);
    setRandomProducts(selectedProducts);
  }, []);

  const handleCarouselClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="carousel-container" onClick={handleCarouselClick}>
      <Carousel
        autoPlaySpeed={7000}
        enableAutoPlay={true}
        showArrows={false}
        focusOnSelect={true}
        pagination={true}
      >
        {randomProducts.map((product) => (
          <div key={product.id} className="carousel-item">
            <ItemCarousel {...product} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carouselle;
