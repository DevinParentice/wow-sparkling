import create from "zustand";

export const cart = create(set => ({
    cartID: "",
    items: [],
    dispatchAddItem: item =>
        set(state => ({
            items: [...state.items, item],
        })),
    dispatchRemoveItem: item =>
        set(state => ({
            items: state.items.filter(index => index !== item),
        })),
    dispatchEditItem: (item, newItem) =>
        set(state => ({
            items: state.items.map(index => (index === item ? newItem : index)),
        })),
    dispatchSetCartID: id =>
        set(() => ({
            cartID: id,
        })),
}));

export default cart;
