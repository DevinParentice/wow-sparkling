import create from "zustand";

export const activeObjects = create(set => ({
    showBlackberry: false,
    showCucumber: false,
    showGrapefruit: false,
    showPineapple: false,
    dispatchShowBlackberry: () =>
        set(state => ({ showBlackberry: !state.showBlackberry })),
    dispatchShowCucumber: () =>
        set(state => ({ showCucumber: !state.showCucumber })),
    dispatchShowGrapefruit: () =>
        set(state => ({ showGrapefruit: !state.showGrapefruit })),
    dispatchShowPineapple: () =>
        set(state => ({ showPineapple: !state.showPineapple })),
}));

export default activeObjects;
