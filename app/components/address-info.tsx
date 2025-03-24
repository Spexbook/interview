"use client";

import { useAddressStore } from "../store/address-store";

export function AddressInfo() {
  const selectedAddress = useAddressStore((state) => state.selectedAddress);

  if (!selectedAddress) {
    return null;
  }

  return (
    <div className="absolute w-[240px] bottom-0 left-0 p-4 bg-white shadow-lg z-10 rounded-md">
        <h3 className="text-lg font-semibold mb-2">{selectedAddress.name}</h3>
        <div className="space-y-1">
          <p className="text-gray-600 text-sm">{selectedAddress.city}, {selectedAddress.state}</p>
          <p className="text-gray-500 text-sm">{selectedAddress.county}</p>
        </div>
    </div>
  );
}