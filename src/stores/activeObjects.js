import create from "zustand";

export const activeObjects = create(set => ({
    showBlackberry: false,
    showCucumber: false,
    showGrapefruit: false,
    showPineapple: false,
    dispatchShowBlackberry: status => set(() => ({ showBlackberry: status })),
    dispatchShowCucumber: status => set(() => ({ showCucumber: status })),
    dispatchShowGrapefruit: status => set(() => ({ showGrapefruit: status })),
    dispatchShowPineapple: status => set(() => ({ showPineapple: status })),
}));

export default activeObjects;
