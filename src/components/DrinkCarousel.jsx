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

const DrinkCarousel = () => {
  const items = [
    {src: "/menu.png", title: "Es Teh"},
    {src: "/menu.png", title: "Es Jeruk"},
    {src: "/menu.png", title: "Es Campur"},
    {src: "/menu.png", title: "Es Doger"},
    {src: "/menu.png", title: "Es Teler"},
    {src: "/menu.png", title: "Es Kelapa Muda"},
    {src: "/menu.png", title: "Es Cincau"},
  ];

  return (
    <div className="mt-4">
      {/* DrinkCarousel */}
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

export default DrinkCarousel;
