import { create } from 'zustand';

export interface Address {
  name: string;
  city: string;
  county: string;
  state: string;
  latitude: number;
  longitude: number;
}

interface AddressStore {
  selectedAddress: Address | null;
  setSelectedAddress: (address: Address | null) => void;
}

export const useAddressStore = create<AddressStore>((set) => ({
  selectedAddress: null,
  setSelectedAddress: (address) => set({ selectedAddress: address }),
}));