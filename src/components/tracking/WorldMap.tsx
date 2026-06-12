"use client";

import {
  MapContainer,
  TileLayer,
  Popup,
  Polyline,
  CircleMarker,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function WorldMap() {
  const origin = [31.2304, 121.4737];
  const destination = [-6.7924, 39.2083];

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-3xl border border-cyan-500/20">
      <MapContainer
        center={[10, 80]}
        zoom={3}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <CircleMarker
          center={origin as any}
          radius={10}
          pathOptions={{
            color: "#f59e0b",
            fillColor: "#fbbf24",
            fillOpacity: 1,
          }}
        >
          <Popup>
            Shanghai Port
          </Popup>
        </CircleMarker>

        <CircleMarker
          center={destination as any}
          radius={10}
          pathOptions={{
            color: "#06b6d4",
            fillColor: "#22d3ee",
            fillOpacity: 1,
          }}
        >
          <Popup>
            Dar es Salaam Port
          </Popup>
        </CircleMarker>

        <Polyline
          positions={[
            origin as any,
            destination as any,
          ]}
          pathOptions={{
            color: "#3b82f6",
            weight: 4,
          }}
        />
      </MapContainer>
    </div>
  );
}
