export const debounceResizeListener = (fn: () => void, ms = 150) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: () => void) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this), ms);
    };
};
