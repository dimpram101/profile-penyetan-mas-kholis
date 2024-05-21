import { useState } from 'react';

const FoodCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { src: '/menu.png', title: 'Ayam Penyet' },
    { src: '/menu.png', title: 'Nasi Goreng' },
    { src: '/menu.png', title: 'Mie Ayam' },
    { src: '/menu.png', title: 'Sate Ayam' },
    { src: '/menu.png', title: 'Bakso' },
    { src: '/menu.png', title: 'Gado Gado' },
    { src: '/menu.png', title: 'Soto Ayam' },
    { src: '/menu.png', title: 'Rendang' },
    { src: '/menu.png', title: 'Rendang' },
  ];

  const itemsPerPage = 4;
  const itemMargin = 8; // Margin antar item (px)
  const maxIndex = Math.ceil(items.length / itemsPerPage) - 1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const translateX = -currentIndex * (100 + (itemMargin / itemsPerPage));

  return (
    <div className="w-full border-t-2 relative">
      {/* FoodCarousel */}
      <div 
        className="absolute -left-14 top-[50%] cursor-pointer bg-[#195A00] bg-opacity-40 p-2 hover:bg-opacity-60 rounded-md"
        onClick={handlePrev}
      >
        <img src="/down-arrow.png" className="rotate-90 w-8"/>
      </div>
      <div className="w-full flex mt-8 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${translateX}%)`, gap: `${itemMargin}px` }}
        >
          {items.map((item, index) => (
            <div className="w-1/4 flex-shrink-0" key={index}>
              <img src={item.src} className="w-full" />
              <p className="text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div 
        className="absolute -right-14 top-[50%] cursor-pointer bg-[#195A00] bg-opacity-40 p-2 hover:bg-opacity-60 rounded-md"
        onClick={handleNext}
      >
        <img src="/down-arrow.png" className="-rotate-90 w-8"/>
      </div>
    </div>
  );
};

export default FoodCarousel;
