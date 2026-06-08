"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function WorldMap() {

  const origin = [31.2304, 121.4737];
  const destination = [-6.7924, 39.2083];

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-3xl border">

      <MapContainer
        center={[10, 80]}
        zoom={3}
        className="h-full w-full"
      >

        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={origin as any}>
          <Popup>
            Shanghai Port
          </Popup>
        </Marker>

        <Marker position={destination as any}>
          <Popup>
            Dar es Salaam Port
          </Popup>
        </Marker>

        <Polyline
          positions={[
            origin as any,
            destination as any,
          ]}
        />

      </MapContainer>

    </div>
  );
}
