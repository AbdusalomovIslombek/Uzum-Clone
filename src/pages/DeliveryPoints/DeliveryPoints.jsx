import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import React from "react";

const DeliveryPoints = () => {
  return (
    <div className="h-80">
      <MapContainer
        center={[41.331449150521, 69.24972182855313]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.331449150521, 69.24972182855313]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default DeliveryPoints;
