import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const FoodCarousel = () => {
  const items = [
    { src: "/menu.png", title: "Ayam Penyet" },
    { src: "/menu.png", title: "Nasi Goreng" },
    { src: "/menu.png", title: "Mie Ayam" },
    { src: "/menu.png", title: "Sate Ayam" },
    { src: "/menu.png", title: "Bakso" },
    { src: "/menu.png", title: "Gado Gado" },
    { src: "/menu.png", title: "Soto Ayam" },
    { src: "/menu.png", title: "Rendang" },
    { src: "/menu.png", title: "Rendang" },
  ];

  return (
    <div className="mt-4">
      {/* FoodCarousel */}
      <Carousel
        responsive={responsive}
      >
        {items.map((item, index) => (
          <div className="" key={index}>
            <img src={item.src} className="" />
            <p className="text-center">{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FoodCarousel;
