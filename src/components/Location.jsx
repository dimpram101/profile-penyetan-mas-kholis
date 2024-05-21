import { MapContainer, TileLayer } from "react-leaflet";

const Location = () => {
  return (
    <div className="w-full max-w-8xl h-screen text-black flex flex-col justify-center items-center font-inter mx-auto relative overflow-hidden">
      <p className="text-center text-4xl mb-6 font-bold">Lokasi Kami</p>
      <MapContainer
        className="w-full h-[80vh]"
        center={["-1.150016", "116.861760"]}
        zoom={18}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=TVTNPGIyfvfalfAu4mN4"
          maxZoom={18}
        />
      </MapContainer>
    </div>
  );
};

export default Location;
