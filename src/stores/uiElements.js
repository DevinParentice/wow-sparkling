import create from "zustand";

export const uiElements = create(set => ({
    backgroundColor: "",
    dispatchSetBackgroundColor: color =>
        set(state => ({ ...state, backgroundColor: color })),
}));

export default uiElements;
