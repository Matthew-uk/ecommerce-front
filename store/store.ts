import { create } from "zustand";

interface User {
  name: string;
  setName: (data: string) => void;
}

export const useUser = create<User>()((set) => ({
  name: "",
  setName: (data: string) => set({ name: data }),
}));
