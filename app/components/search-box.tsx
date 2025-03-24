"use client";

import { SearchBox as SearchBoxComponent } from "@mapbox/search-js-react";
import { useCallback, useState } from "react";
import { useAddressStore } from "../store/address-store";
import { useMap } from "react-map-gl/mapbox";

export function SearchBox() {
  const { current: map } = useMap();

  const [value, setValue] = useState("");
  const setSelectedAddress = useAddressStore(
    (state) => state.setSelectedAddress
  );

  const handleSelectAddress = useCallback(
    (data: any) => {
      const location = data.features[0].properties;
      const { coordinates, context, full_address } = location;

      console.log(data);

      const city = context.place.name;
      const county = context.district.name;
      const state = context.region.name;

      const address = {
        name: full_address,
        city,
        county,
        state,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      };
      setSelectedAddress(address);

      map?.flyTo({
        center: [coordinates.longitude, coordinates.latitude],
        zoom: 15,
      });
    },
    [map]
  );

  return (
    <div className="absolute top-0 left-0 right-0 p-4 z-10">
      {/* @ts-ignore */}
      <SearchBoxComponent
        options={{
          country: "US",
          types: "address",
        }}
        value={value}
        onChange={(v) => setValue(v)}
        onRetrieve={handleSelectAddress}
        accessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!}
      />
    </div>
  );
}
