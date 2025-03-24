"use client";

import dynamic from "next/dynamic";
import { Map as MapComponent } from "react-map-gl/mapbox";
import { AddressInfo } from "./components/address-info";

const SearchBox = dynamic(
  () => import("./components/search-box").then((mod) => mod.SearchBox),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <MapComponent
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        initialViewState={{
          longitude: -117.1611,
          latitude: 32.7157,
          zoom: 10,
        }}
      >
        <SearchBox />
        <AddressInfo />
      </MapComponent>
    </div>
  );
}
