import { create } from "zustand";

const useStore = create((set) => ({
    cart: {}, // Example format: { productId: { title, quantity } }

    incrementQuantity: (productId, title) =>
        set((state) => {
            const newCart = { ...state.cart };
            if (!newCart[productId]) {
                newCart[productId] = { quantity: 1, title }; // Add product with title
            } else {
                newCart[productId].quantity += 1; // Increment quantity
            }
            return { cart: newCart };
        }),

    decrementQuantity: (productId) =>
        set((state) => {
            const newCart = { ...state.cart };
            if (newCart[productId]) {
                if (newCart[productId].quantity > 1) {
                    newCart[productId].quantity -= 1; // Decrement quantity
                } else {
                    delete newCart[productId]; // Remove item if quantity is zero
                }
            }
            return { cart: newCart };
        }),

    removeItem: (productId) =>
        set((state) => {
            const newCart = { ...state.cart };
            delete newCart[productId]; // Completely remove item
            return { cart: newCart };
        }),
}));

export default useStore;
