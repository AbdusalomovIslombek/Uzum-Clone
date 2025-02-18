import { Fa0 } from "react-icons/fa6";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// export const useStore = create((set) => ({
//   favorite: [],
//   addToFavorite: (productId) =>
//     set((state) => ({ favorite: [...state.favorite, productId] })),
//   removeFromFavorite: (productId) =>
//     set((state) => {
//       let eski = state.favorite;
//       let yangi = eski.filter((id) => id != productId);
//       return { favorite: yangi };
//     }),
// }));
export const useStore = create(
  persist(
    (set, get) => ({
      favorite: [],
      addToFavorite: (productId) =>
        set({ favorite: [...get().favorite, productId] }),
      removeFromFavorite: (productId) =>
        set(() => {
          let eski = get().favorite;
          let yangi = eski.filter((id) => id != productId);
          return { favorite: yangi };
        }),
      cart: [],
      addToCart: (productId) => set({ cart: [...get().favorite, productId] }),
      removeFromCart: (productId) =>
        set(() => {
          let eski = get().cart;
          let yangi = eski.filter((id) => id != productId);
          return { cart: yangi };
        }),
      products: [],
      setProducts: (allProduct) => set(() => ({ products: allProduct })),
      mainData: [],
      setMainData: (allData) => set(() => ({ mainData: allData })),
      user: {},
      setUser: (userFromFirebase) => set(() => ({ user: userFromFirebase })),
    }),
    {
      name: "uzum-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
